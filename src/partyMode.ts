import {AccessToken, RoomServiceClient} from "livekit-server-sdk";

export async function generateToken(roomId, identity) {

    const token = new AccessToken(
        `${process.env.LIVEKIT_API_KEY}`,
        `${process.env.LIVEKIT_API_SECRET}`,
        {
            identity: identity,
            name: identity,
            ttl: "12h",
        }
    );

    token.addGrant({
        roomJoin: true,
        room: roomId,
        canPublish: true,
        canSubscribe: true,
        canPublishData: true,
    });

    return await token.toJwt();
}

export async function getParticipants(roomId: string) {
    const roomService = new RoomServiceClient(`${process.env.LIVEKIT_URL}`, `${process.env.LIVEKIT_API_KEY}`,
        `${process.env.LIVEKIT_API_SECRET}`,);
    const res = await roomService.listParticipants(roomId);
    return res
}