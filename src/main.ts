import fs from "fs"
import {injector_pipeline} from "./skinInjector";
import {check_git_exist} from "./git_check";
import {checkAndCloneSkinsFolder} from "./skins_repo_check_update";
import "./skinDb";
import {get_champion_roles_list, get_champion_skins, updateGamePath} from './skinrepository';
import {app, BrowserWindow, ipcMain} from 'electron';
import path from 'path'; // Make sure you're importing path correctly;

// Get the correct directory path
function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            // sandbox:false,
            nodeIntegration: true, // Enable Node.js integration in the renderer process
            contextIsolation: true, // Disable context isolation (for simplicity)
            preload: path.join(__dirname, 'preload.js'), // Ensure this points to the correct preload script
        }
    });

    const isDev = process.env.NODE_ENV === 'development'
    const startURL =
        isDev

            ? `http://localhost:3001/`  // In dev mode, use the file URL directly
            : `${path.join(__dirname, 'index.html')}`;  //
    console.log(startURL)
    win.loadURL(startURL);

}

app.whenReady().then(async () => {
    ipcMain.handle('get_champions_roles', async () => await get_champion_roles_list())
    ipcMain.handle("get_champion_skins", async (_event, champ_id: number) => {

        return await get_champion_skins(champ_id);
    });
    ipcMain.handle("select_skin", async (_event, chamapId_Skin_Name_Map: Map<string, string>) => {
        return await injector_pipeline(chamapId_Skin_Name_Map)
    })
    ipcMain.handle("update_game_path", async (_event, game_path: string) => {
        return await updateGamePath(game_path)
    })
    check_git_exist()
    await checkAndCloneSkinsFolder()

    createWindow()

});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
process.on('uncaughtException', (err) => {
    fs.appendFileSync('log.txt', `[UNCAUGHT EXCEPTION] ${err.stack || err}\n`);
    process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {

    // @ts-ignore
    fs.appendFileSync("log.txt", `[UNHANDLED REJECTION] ${reason.stack || reason}\n`);
    process.exit(1);
});
