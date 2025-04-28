import {RoomEvent} from "livekit-client";
export async function populateCards() {
    return await window.champions.get_champions();
}

class SkinMap {
    constructor() {
        this.MainskinMap = new Map();
        this.PartySkinMap = new Map
    }

    async getSkinMap() {
        return this.MainskinMap;
    }
    async getPartySkinMap() {
        return this.PartySkinMap

    }

}

export const skinMapInstance = new SkinMap();

export async function handleSkinSelected(skin, setShowSuccess, setShowError, room) {
    let closeConnection;
    try {
        const key = `${skin.champion.id}`;
        const s_value = `${skin.skin_number}`;
        // Get the map instance
        const map = await skinMapInstance.getSkinMap();
        if (map.size >4){
            map.clear()
        }
        map.set(key, s_value);

        // Send message to party
        if (room) {
            const success = await sendPartyMessage({
                type: 'party-action',
                champId: key,
                skinId: s_value,
            }, room);

            if (!success) {
                throw new Error("Failed to send party message");
            }
        }

        // Call Electron API
        const partyMap = await skinMapInstance.getPartySkinMap()
        const combinedskinMap = mergeMaps(map,partyMap);
        await window.champions.select_skin(true,combinedskinMap);
        const handleSuccess = () => {
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 3000);
        };

        const handleFailure = () => {
            setShowError(true);
            setTimeout(() => setShowError(false), 3000);
        };

        // Setup listeners
        const cleanupSuccess = window.electronAPI.onSkinInjectionSuccess(handleSuccess);
        const cleanupFailure = window.electronAPI.onSkinInjectionFailed(handleFailure);

        return () => {
            cleanupSuccess();
            cleanupFailure();
        };
    } catch (error) {
        console.error("Error in handleSkinSelected:", error);
        setShowError(true);
        cleanupSuccess();
        cleanupFailure();
    }
}

export async function generateTokenAsync(roomId, identityId) {
    return await window.champions.generate_token(roomId, identityId);
}

export async function sendPartyMessage(message, room) {
    if (!room) {
        console.error("Not connected to a room");
        return false;
    }
    const encoder = new TextEncoder();
    try {
        let messageString = typeof message === 'string' ? message : JSON.stringify(message);
        messageString = encoder.encode(messageString);
        await room.localParticipant.publishData(
            messageString,
            { topic: 'party-chat' }
        );
        return true;
    } catch (error) {
        console.error("Failed to send message:", error);
        return false;
    }
}

export function setupMessageHandler(room, skinMapInstance) {
    if (!room) return () => {};  // Return empty function if no room

    const handler = (payload, participant, _, topic) => {
        if (topic === 'party-chat') {
            try {
                const text = new TextDecoder().decode(payload); // <- decode Uint8Array to string
                const message = JSON.parse(text);


                if (message.type === 'party-action') {
                    skinMapInstance.getPartySkinMap().then(async (Partymap) => {
                        Partymap.set(message.champId,message.skinId)
                        const mainMap = await skinMapInstance.getSkinMap()
                        const combinedSkinMap = mergeMaps(mainMap,Partymap)
                        await window.champions.select_skin(false,combinedSkinMap);
                    });
                }
            } catch (e) {
                console.error("Failed to parse message:", e);
            }
        }
    };

    room.on(RoomEvent.DataReceived, handler);

    // Return cleanup function
    return () => {
        room.off(RoomEvent.DataReceived, handler);
    };
}
function mergeMaps(primary, secondary) {
    return new Map([
        ...secondary, // Lower priority (overwritten by primary)
        ...primary    // Higher priority
    ]);
}
