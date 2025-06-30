import { exec } from "child_process";
import path from "path";
import EventEmitter from "events";
import fs from "fs";
import { getChampSkinNames, getGamePath } from "./skinrepository";
const isDev = process.env.NODE_ENV === "development";
import axios from "axios";
const injectorPath = isDev
  ? path.join(process.cwd(), "./src/cslol-tools/mod-tools.exe")
  : path.join(
      process.resourcesPath,
      "app.asar.unpacked",
      "src",
      "cslol-tools",
      "mod-tools.exe"
    );

const eventEmitter = new EventEmitter();

const skinsPath = isDev
  ? path.join(process.cwd(), "./skinfiles/")
  : path.resolve(process.cwd(), "./skinfiles/");
const config_file_path = isDev
  ? path.join(process.cwd(), "./src/config.ini")
  : path.join(process.resourcesPath, "app.asar.unpacked", "src", "config.ini");
// Function to run the command

function runCommand(command, params) {
  return new Promise((resolve, reject) => {
    const child = exec(
      `"${command}" ${params.join(" ")}`,
      (error, stdout, stderr) => {
        if (error) {
          reject(`Error: ${error.message}`);
          eventEmitter.emit("failure", error);
          return;
        }
        if (stderr) {
          reject(`stderr: ${stderr}`);
          eventEmitter.emit("failure", stderr);
          return;
        }

        resolve(stdout);
      }
    );
    child.stdout.on("data", (data) => {
      fs.appendFileSync("log.txt", data); // Print the output to the console as it arrives
    });

    child.stderr.on("data", (data) => {
      fs.appendFileSync("log.txt", data);
    });
  });
}

// Wrap your sequential commands in an async function
export async function injector_pipeline(
  champId_skin_names: Map<string, [string,boolean,string]>
) {
  let gamePath = await getGamePath().then((res) => res.game_path);
  gamePath = gamePath.replace(/"/g, "");
  try {
    eventEmitter.on("failure", (error) => {
      console.error("Pipeline failed:", error);
      return false;
    });
    // Step 2: Import  skins
    for (const [champId, [skin_name,is_chroma,chroma_num]] of champId_skin_names.entries()) {
      const cleanedSkinName = skin_name.replace("/", "");
      const skinPath = path.join(skinsPath, champId, cleanedSkinName);
      const extension = await fetchAndSaveSkinFile(champId, skin_name,is_chroma,chroma_num);
      const importOutput = await runCommand(injectorPath, [
        "import",
        `"${skinPath}${extension}"`,
        `./Installed/"${skin_name.replace("/", " ")}"`,
        `--game:"${gamePath}"`, // Wrap the game path in quotes
        "--noTFT",
      ]);
    }

    // Step 3: Create overlay for the skin
    const overlayOutput = await runCommand(injectorPath, [
      "mkoverlay",
      "./Installed",
      "./dst",
      `--game:"${gamePath}"`, // Wrap the game path in quotes
      `--mods:"${Array.from(champId_skin_names.values())
        .map((value) => value[0].replace("/", " "))
        .join("/")}"`,
      "--noTFT",
    ]);

    // Step 4: Run the overlay
    const runOverlayOutput = runCommand(injectorPath, [
      "runoverlay",
      "./dst",
      `${config_file_path}`,
      `--game:"${gamePath}"`, // Wrap the game path in quotes
    ]);

    return true;
  } catch (error) {
    return false;
    console.error("Error:", error);
  }
}

// Call the async function to run commands sequentially

async function get_repo_skin_url_if_exist(
  champNum: string,
  skin_number: string,
  is_chroma :boolean,
  chroma_num:string
) {
  try{
    const owner = "darkseal-org";
    const repo = "lol-skins";
    const branch = "main";
    let champ_skin_name = await getChampSkinNames(champNum, skin_number);
    const champ_name = champ_skin_name[0]
    const skin_name = champ_skin_name[1]
        .replace(/[/]/g, " ")
        .replace(":", "");
    if (is_chroma) {
      let skin_name_path_in_repo = `${champ_name}/chromas/${skin_name}`;
      const skin_path = `skins/${skin_name_path_in_repo}/${skin_name} ${champNum}${chroma_num.padStart(3, "0")}.zip`;

      let url = encodeURI(`https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${skin_path}`)
      return url;
    }
    let skin_name_path_in_repo = `${champ_name}/${skin_name}`;
    const skin_path = `skins/${skin_name_path_in_repo}.zip`;
    let rawUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${skin_path}`;
    return encodeURI(rawUrl);
  }
  catch(error) {
    throw error;
  }
}
async function checkIfRepoFileExists(url: string): Promise<boolean> {
  try {
    const response = await axios.head(url, {
      timeout: 5000,
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });

    return response.status >= 200 && response.status < 300;
  } catch (error) {

    if (axios.isAxiosError(error)) {
      if (error.response) {
        // File doesn't exist (404) or other HTTP error
        console.log(`File not found (HTTP ${error.response.status})`);
      } else if (error.request) {
        // No response received (network error)
        console.log("Network error:", error.message);
      }
    } else {
      // Non-Axios error
      console.log("Unexpected error:", error);
    }
    return false;
  }
}
async function download_skin(
  url: string,
  outputPath: string
): Promise<boolean> {
  try {
    const response = await axios({
      method: "get",
      url: url,
      responseType: "stream",
      validateStatus: (status) => status === 200, // Only accept 200 OK
    });
    const fileStream = fs.createWriteStream(outputPath);
    response.data.pipe(fileStream);
    return new Promise((resolve, reject) => {
      fileStream.on("finish", () => {
        fileStream.close();
        resolve(true);
      });

      fileStream.on("error", (err) => {
        fs.unlink(outputPath, () => reject(err));
      });
    });
  } catch (error) {
    // Clean up if file was partially downloaded
    if (fs.existsSync(outputPath)) {
      fs.unlinkSync(outputPath);
    }
    throw error;
  }
}
async function fetchAndSaveSkinFile(champNum: string, skin_number: string,is_chroma:boolean,chroma_num:string) {

  let rawUrl = await get_repo_skin_url_if_exist(champNum, skin_number,is_chroma,chroma_num);

  const exists = await checkIfRepoFileExists(rawUrl);

  if (!exists) {
    const rawUrl = `${process.env.BACKEND_SERVER_URL}/skin/${champNum}/${skin_number}`;
    const outputDir = path.resolve(process.cwd(), `./skinfiles/${champNum}`);
    const outputPath = path.join(outputDir, `${skin_number}.wad.client`);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    await download_skin(rawUrl, outputPath);
    return ".wad.client";
  }

  const outputDir = path.resolve(process.cwd(), `./skinfiles/${champNum}`);
  const outputPath = path.join(outputDir, `${skin_number}.zip`);
  // Create directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  await download_skin(rawUrl, outputPath);
  return ".zip";
}
