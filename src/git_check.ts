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
        //C:\Program Files\Git\cmd
        console.log("❌ Git is not installed.");

        // Prompt the user for consent
        const response = dialog.showMessageBoxSync({
            type: "question",
            buttons: ["Yes", "No"],
            defaultId: 0,
            title: "Git Not Found",
            message: "Git is not installed on your system.\nWould you like to install it now?\nNote:Make sure the add git to PATH option is checked",
        });

        if (response !== 0) {
            console.log("User declined to install Git.");
            process.exit()
            return;
        }
        const isDev = process.env.NODE_ENV === 'development'

        const installerPath = isDev? path.join(process.cwd(),"./depend/Git-2.45.2-64-bit.exe"):path.join(process.resourcesPath, 'app.asar.unpacked',"depend", "Git-2.45.2-64-bit.exe");

        runInstaller(installerPath);
        const platform = os.platform();
        if (platform !== "win32") {
            shell.openExternal("https://git-scm.com/downloads");
            return;
        }

        // Windows-only download
        // const gitInstallerUrl = "https://objects.githubusercontent.com/github-production-release-asset-2e65be/23216272/c6c1c87b-d3af-4ae8-9cd6-78a4aea72a77?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=releaseassetproduction%2F20250408%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250408T212122Z&X-Amz-Expires=300&X-Amz-Signature=8f0ec0836a63bf4a402f322cca0cbabdd9957a904c680dcd834728ead4b11e6f&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%3DGit-2.49.0-64-bit.exe&response-content-type=application%2Foctet-stream";

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
