
import {exec} from "child_process";
import path from "path";
import EventEmitter from "events";

const injectorPath = path.resolve(process.cwd(),"./src/cslol-tools/mod-tools.exe")
const gamePath = "d:/Games/LeagueofLegends/League of Legends/Game"; // Just use the path as a string
const skinsPath = path.resolve(process.cwd(),"./lol-skins/skins")
const config_file_path = path.resolve(process.cwd(),"./config.ini")
// Function to run the command
const eventEmitter = new EventEmitter();


function runCommand(command, params) {
    return new Promise((resolve, reject) => {
        const child = exec(command + " " + params.join(" "), (error, stdout, stderr) => {
            if (error) {
                reject(`Error: ${error.message}`);
                eventEmitter.emit("failure",error);
                return;
            }
            if (stderr) {
                reject(`stderr: ${stderr}`);
                eventEmitter.emit("failure",stderr)
                return;
            }

            resolve(stdout);
        });
        child.stdout.on("data", (data) => {
            process.stdout.write(data); // Print the output to the console as it arrives
        });

        child.stderr.on("data", (data) => {
            process.stderr.write(data); // Print error output in real time as well
        });
    });
}

// Wrap your sequential commands in an async function
export async function injector_pipeline(champId_skin_names:Map<string,string>) {
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
        for(const [champId,skin_name] of champId_skin_names.entries()){
            const importOutput = await runCommand(injectorPath, [
                "import",
                `${skinsPath}/${champId}/"${skin_name}.zip"`, // Wrap the path with quotes
                `./Installed/"${skin_name}"`,
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
            `--mods:"${Array.from(champId_skin_names.values()).join("/")}"`,
            "--noTFT"
        ]);

        // Step 4: Run the overlay
        const runOverlayOutput =   runCommand(injectorPath, [
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

