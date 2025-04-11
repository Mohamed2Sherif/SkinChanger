import {exec} from "child_process";
import path from "path";
import EventEmitter from "events";
import fs from 'fs';
import {getGamePath} from "./skinrepository";
const isDev = process.env.NODE_ENV === 'development'
import {GameSettings, PrismaClient} from "../prisma/src/generated/prisma/client"
import https from 'https';
const injectorPath = isDev ? path.join(process.cwd(), "./src/cslol-tools/mod-tools.exe") : path.join(process.resourcesPath, 'app.asar.unpacked', 'src', 'cslol-tools', "mod-tools.exe");

const eventEmitter = new EventEmitter();


const skinsPath = isDev ? path.join(process.cwd(), "./skinfiles/") : path.resolve(process.cwd(), "./skinfiles/")
const config_file_path = isDev ? path.join(process.cwd(), "./src/config.ini") : path.join(process.resourcesPath, 'app.asar.unpacked', 'src', 'config.ini');
// Function to run the command


function runCommand(command, params) {
    return new Promise((resolve, reject) => {
        const child = exec(command + " " + params.join(" "), (error, stdout, stderr) => {
            if (error) {
                reject(`Error: ${error.message}`);
                eventEmitter.emit("failure", error);
                return;
            }
            if (stderr) {
                reject(`stderr: ${stderr}`);
                eventEmitter.emit("failure", stderr)
                return;
            }

            resolve(stdout);
        });
        child.stdout.on("data", (data) => {
            fs.appendFileSync("log.txt", data) // Print the output to the console as it arrives
        });

        child.stderr.on("data", (data) => {
            fs.appendFileSync("log.txt", data)
        });
    });
}

// Wrap your sequential commands in an async function
export async function injector_pipeline(champId_skin_names: Map<string, string>) {
    let gamePath = await getGamePath().then(res=>res.game_path);
    gamePath = gamePath.replace(/"/g, '');
    try {
        // Step 1: Display the help of mod-tools (optional)
//         const helpOutput = await runCommand(injectorPath, ["--help"]);
//         console.log("Help Output:", helpOutput);
        eventEmitter.on('failure', (error) => {
            console.error("Pipeline failed:", error);
            return false
            // You can add any custom handling here, like notifying the user, logging, etc.
        });
        // Step 2: Import  skins
        console.log(champId_skin_names.entries())
        for (const [champId, skin_name] of champId_skin_names.entries()) {
            const cleanedSkinName = skin_name.replace("/", "");
            const skinPath = path.join(skinsPath, champId, cleanedSkinName);
            await fetchAndSaveSkinFile(champId,skin_name)
            const importOutput = await runCommand(injectorPath, [
                "import",
                `"${skinPath}.fantome"`,
                `./Installed/"${skin_name.replace("/", " ")}"`,
                `--game:"${gamePath}"`, // Wrap the game path in quotes
                "--noTFT"
            ]);
        }


        // Step 3: Create overlay for the skin
        const overlayOutput = await runCommand(injectorPath, [
            "mkoverlay",
            "./Installed",
            "./dst",
            `--game:"${gamePath}"`, // Wrap the game path in quotes
            `--mods:"${Array.from(champId_skin_names.values())
                .map((value) => value.replace("/", " "))
                .join("/")}"`,
            "--noTFT"
        ]);

        // Step 4: Run the overlay
        const runOverlayOutput = runCommand(injectorPath, [
            "runoverlay",
            "./dst",
            `${config_file_path}`,
            `--game:"${gamePath}"` // Wrap the game path in quotes
        ]);
    } catch (error) {
        return false
        console.error("Error:", error);
    }
}

// Call the async function to run commands sequentially

async function fetchAndSaveSkinFile(champNum:string,skin_number:string) {
    const owner = 'darkseal-org';
    const repo = 'lol-skins-developer';
    const branch = 'main';
    const skin_path = `${champNum}/${skin_number}.fantome`;
    const rawUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${skin_path}`;
    const outputDir = path.resolve(process.cwd(), `./skinfiles/${champNum}`);
    const outputPath = path.join(outputDir, `${skin_number}.fantome`);

    // Create directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    return new Promise((resolve, reject) => {
        https.get(rawUrl, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`HTTP error! status: ${response.statusCode}`));
                return;
            }

            const fileStream = fs.createWriteStream(outputPath);
            response.pipe(fileStream);

            fileStream.on('finish', () => {
                fileStream.close();
                resolve(outputPath);
            });

            fileStream.on('error', (err) => {
                fs.unlink(outputPath, () => reject(err));
            });
        }).on('error', reject);
    });
}