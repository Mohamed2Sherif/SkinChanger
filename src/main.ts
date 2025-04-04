import {app, BrowserWindow, ipcMain} from 'electron';
import path from 'path'; // Make sure you're importing path correctly
import {get_champion_roles_list} from './skinrepository.js';

// Get the correct directory path
// const __dirname = path.dirname(new URL(import.meta.url).pathname);
console.log('Current directory:', path.join(__dirname,"/preload.js"));


function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            // sandbox:false,
            nodeIntegration: true, // Enable Node.js integration in the renderer process
            contextIsolation: true, // Disable context isolation (for simplicity)
            preload: path.join(__dirname,'/preload.js'), // Ensure this points to the correct preload script
        }
    });

    // Load the index.html file from the correct path
    const indexPath = "index.html"; // Ensure this points to the build directory
    console.log('Loading HTML from:', indexPath); // Debug the path
    win.loadFile(indexPath); // Load the file
}

app.whenReady().then(() => {
    ipcMain.handle('get_champions_roles', async () => await get_champion_roles_list())
    createWindow()
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
