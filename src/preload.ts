import {contextBridge, ipcRenderer} from 'electron';

contextBridge.exposeInMainWorld('champions', {
    get_champions: () => ipcRenderer.invoke('get_champions_roles'),
    get_skins: (champId: string) => ipcRenderer.invoke("get_champion_skins", champId),
    select_skin: (isPrimary:boolean,champId_Skin_Name_Map: Map<string,[string,boolean,string]>) => ipcRenderer.invoke("select_skin", isPrimary,champId_Skin_Name_Map),
    update_game_path: (game_path: string) => ipcRenderer.invoke("update_game_path", game_path),
    generate_token : (roomId :string,identity_Id:string) => ipcRenderer.invoke("generate_token", roomId, identity_Id),
    get_gamePath : ()=> ipcRenderer.invoke("get_gamePath"),
    get_participants : (roomId)=> ipcRenderer.invoke("get_participants",roomId),
    LiveKitUrl: process.env.LIVEKIT_URL,
});
contextBridge.exposeInMainWorld('electronAPI', {
    onSkinInjectionSuccess: (callback) => {
        ipcRenderer.on('skin_injection_success', callback);
        return () => ipcRenderer.removeListener('skin_injection_success', callback);

    },
    onSkinInjectionFailed: (callback) => {
        ipcRenderer.on('skin_injection_failed', callback);
        return () => ipcRenderer.removeListener('skin_injection_failed', callback);
    },
});