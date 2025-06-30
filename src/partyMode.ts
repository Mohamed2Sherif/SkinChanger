
export async function generateToken(
    roomId: string,
    identity: string,
): Promise<string> {
    const url = `${process.env.BACKEND_SERVER_URL}/party/accessToken/${encodeURIComponent(
        roomId,
    )}/${encodeURIComponent(identity)}`;

    const res = await fetch(url);
    if (!res.ok) {
        const text = await res.text();
        throw new Error(`Token request failed: ${res.status} ${text}`);
    }
    const { token } = (await res.json()) as { token: string };
    return token;
}

/**
 * GET /party/participants/{room_id}
 * Returns { participants: ParticipantInfo[] }
 */
export async function getParticipants(
    roomId: string,
): Promise<any[]> /* replace with your own type */ {
    const url = `${process.env.BACKEND_SERVER_URL}/party/participants/${encodeURIComponent(roomId)}`;

    const res = await fetch(url);
    if (!res.ok) {
        const text = await res.text();
        throw new Error(`Participant request failed: ${res.status} ${text}`);
    }
    const { participants } = (await res.json()) as { participants: any[] };
    return participants;
}