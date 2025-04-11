import {PrismaClient} from "../prisma/src/generated/prisma/client"
import path from "path";

function createPrismaClient() {
    return new PrismaClient();
}

// Initialize Prisma client with the new DATABASE_URL
function updateDatabaseUrlAndReinitialize() {
    const isDev = process.env.NODE_ENV === 'development'
    const dbPath =
        isDev
            ? path.join(__dirname, '../db', 'ExaltedSkins.db') :
            path.join(process.resourcesPath, 'app.asar.unpacked', 'db', 'ExaltedSkins.db');

// Normalize the path to ensure cross-platform compatibility
    const dbUrl = `file:${path.normalize(dbPath)}`;

// Set DATABASE_URL before initializing Prisma
    process.env.DATABASE_URL = dbUrl;
    // Re-initialize Prisma Client
    const prisma = createPrismaClient();
    return prisma;
}

// Example usage
const prisma = updateDatabaseUrlAndReinitialize();

export async function get_champion_roles_list() {
    return await prisma.champion.findMany({
            where: {},
            include: {
                roles:
                    {
                        select: {
                            role: {
                                select: {
                                    role_name: true
                                }
                            }
                        }
                    }
            },
            orderBy: {
                champ_name: 'asc'
            }
        },
    )
}

export async function get_champion_skins(champion_id: number) {
    return await prisma.skin.findMany({
        where: {champ_id: champion_id},
        include: {
            champion: {
                select:
                    {
                        id: true,
                        champ_name: true
                        , champ_code: true
                    }
            }
        }
    })
}

export async function updateGamePath(gamePath: string) {
    await prisma.gameSettings.upsert({
        where: {settings_Id: "default"},
        update: {game_path: gamePath},
        create: {
            settings_Id: "default",
            game_path: gamePath
        }
    });
    return true
}

export async function getGamePath() {
    return await prisma.gameSettings.findFirst({where: {settings_Id: "default"}});
}