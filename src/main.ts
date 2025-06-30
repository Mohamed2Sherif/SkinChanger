import fs from "fs"
import "./skinDb";
import {get_champion_roles_list, get_champion_skins, getGamePath, updateGamePath} from './skinrepository';
import {app, BrowserWindow, ipcMain} from 'electron';
import path from 'path';
import {autoUpdater} from "electron-updater";
import {generateToken, getParticipants} from "./partyMode"; // Make sure you're importing path correctly;
import dotenv from "dotenv";
import {queueService ,emitter} from "./queueService";
const dotenvPath = path.join(process.resourcesPath, '.env');
dotenv.config({path:dotenvPath})
autoUpdater.setFeedURL({
    provider: 'github',
    owner: 'Mohamed2Sherif',
    repo: 'SkinChanger',
    private: true,
    token: process.env.GH_TOKEN
});
autoUpdater.autoDownload=true
autoUpdater.autoInstallOnAppQuit = true
function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            // sandbox:false,
            nodeIntegration: false, // Enable Node.js integration in the renderer process
            contextIsolation: true, // Disable context isolation (for simplicity)
            preload: path.join(__dirname, 'preload.js'), // Ensure this points to the correct preload script
        },
        icon: path.join(__dirname, 'favicon.ico'), // Update this path
    });

    const isDev = process.env.NODE_ENV === 'development'
    const startURL =
        isDev

            ? `http://localhost:3001/`  // In dev mode, use the file URL directly
            : `${path.join(__dirname, 'index.html')}`;  //
    win.loadURL(startURL);
    emitter.on("skin_injection_success",()=>{
        win.webContents.send("skin_injection_success")
    });
    emitter.on("skin_injection_failed",()=>{
        win.webContents.send("skin_injection_failed");
    })
}

app.whenReady().then(async () => {
    ipcMain.handle('get_champions_roles', async () => await get_champion_roles_list())
    ipcMain.handle("get_champion_skins", async (_event, champ_id: number) => {

        return await get_champion_skins(champ_id);
    });
    ipcMain.handle("select_skin", async (_event, isprimary:boolean,chamapId_Skin_Name_Map: Map<string, [string,boolean,string]>) => {
        return await queueService.addToQueue(chamapId_Skin_Name_Map,isprimary)

    })
    ipcMain.handle("update_game_path", async (_event, game_path: string) => {
        return await updateGamePath(game_path)
    })
    ipcMain.handle("generate_token", async (_event, roomId:string,IdentityId:string) => {
        return await generateToken(roomId,IdentityId)
    })
    ipcMain.handle("get_gamePath",async()=>{
        return await getGamePath();
    })
    ipcMain.handle("get_participants",async(_event,roomId:string)=>{
        return await getParticipants(roomId);
    })
    createWindow()
    autoUpdater.checkForUpdates()
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

