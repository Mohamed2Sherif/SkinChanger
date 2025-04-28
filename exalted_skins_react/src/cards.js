import {RoomEvent} from "livekit-client";
export async function populateCards() {
    return await window.champions.get_champions();
}

class SkinMap {
    constructor() {
        this.skinMap = new Map();
    }

    async getSkinMap() {
        return this.skinMap;
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
        await window.champions.select_skin(true,map);
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
                    skinMapInstance.getSkinMap().then(async (map) => {
                        if (!map.has(message.champId)) {
                            map.set(message.champId, message.skinId);
                        }
                        await window.champions.select_skin(false,map);
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