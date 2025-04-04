import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('champions', {
    get_champions: () => ipcRenderer.invoke('get_champions_roles')
});
