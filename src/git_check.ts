import { exec, execFile } from "child_process";
import https from "https";
import fs from "fs";
import path from "path";
import os from "os";
import { app, dialog, shell } from "electron";
export function check_git_exist() {
    exec("git --version", (err) => {
        if (!err) {
            console.log("✅ Git is already installed.");
            return;
        }

        console.log("❌ Git is not installed.");

        // Prompt the user for consent
        const response = dialog.showMessageBoxSync({
            type: "question",
            buttons: ["Yes", "No"],
            defaultId: 0,
            title: "Git Not Found",
            message: "Git is not installed on your system.\nWould you like to download and install it now?",
        });

        if (response !== 0) {
            console.log("User declined to install Git.");
            return;
        }

        const platform = os.platform();
        if (platform !== "win32") {
            shell.openExternal("https://git-scm.com/downloads");
            return;
        }

        // Windows-only download
        const gitInstallerUrl = "https://github.com/git-for-windows/git/releases/download/v2.49.0.windows.1/Git-2.49.0-64-bit.exe";
        const installerPath = path.join(app.getPath("userData"), "Git-2.49.0-64-bit.exe");

        const file = fs.createWriteStream(installerPath);
        console.log("⬇️ Downloading Git installer...");

        https.get(gitInstallerUrl, (res) => {
            if (res.statusCode !== 200) {
                console.error("Failed to download Git. Status:", res.statusCode);
                return;
            }

            res.pipe(file);
            file.on("finish", () => {
                file.close(() => {
                    console.log("✅ Git installer downloaded to", installerPath);
                    runInstaller(installerPath);
                });
            });
        }).on("error", (err) => {
            fs.unlink(installerPath, () => {});
            console.error("Download error:", err.message);
        });
    });

    function runInstaller(installerPath) {
        console.log("🚀 Launching Git installer...");
        execFile(installerPath, (error) => {
            if (error) {
                console.error("Failed to launch Git installer:", error);
            } else {
                console.log("Git installer launched.");
            }
        });
    }
}
