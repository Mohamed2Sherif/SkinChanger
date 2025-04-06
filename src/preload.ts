import {contextBridge, ipcRenderer} from 'electron';

contextBridge.exposeInMainWorld('champions', {
    get_champions: () => ipcRenderer.invoke('get_champions_roles'),
    get_skins: (champId: string) => ipcRenderer.invoke("get_champion_skins", champId),
    select_skin:(champId_Skin_Name_Map:Map<string,string>)  => ipcRenderer.invoke("select_skin",champId_Skin_Name_Map)
});
