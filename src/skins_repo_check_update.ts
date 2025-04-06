import { exec } from "child_process";
import fs from "fs";
import path from "path";


// Function to run the command
const skinsRepoUrl = "https://github.com/koobzaar/lol-skins/"
function runCommand(command: string, params: string[], options = {}) {
    return new Promise<string>((resolve, reject) => {
        const child = exec(command + " " + params.join(" "), options, (error, stdout, stderr) => {
            if (error) {
                reject(`Error: ${error.message}`);
                return;
            }
            if (stderr) {
                reject(`stderr: ${stderr}`);
                return;
            }
            resolve(stdout);
        });

        child.stdout?.on("data", (data) => process.stdout.write(data));
        child.stderr?.on("data", (data) => process.stderr.write(data));
    });
}

// Function to check if folder exists and clone if not
export async function checkAndCloneSkinsFolder() {
    const skinsDir = path.resolve(process.cwd(), "./lol-skins");

    if (!fs.existsSync(skinsDir)) {
        console.log("Skins folder not found, cloning repository...");
        try {
            const cloneOutput = await runCommand("git", ["clone", skinsRepoUrl, skinsDir]);
            console.log("Skins repository cloned successfully:", cloneOutput);
        } catch (error) {
            console.error("Failed to clone skins repository:", error);
        }
    } else {
        try {
            const cloneOutput =await runCommand("git", ["pull", "origin"], {
                cwd: skinsDir // 👈 This sets the working directory for the command
            });
            console.log("Skins repository updated successfully:", cloneOutput);
        } catch (error) {
            console.error("Failed to clone skins repository:", error);
        }
        console.log("Skins folder already exists.");
    }
}
