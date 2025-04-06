import {PrismaClient, Role} from '../prisma/src/generated/prisma/client'
import axios from "axios";
import isDev from "electron-is-dev";
import path from "path";

// Initialize Prisma

function createPrismaClient() {
    return new PrismaClient();
}

// Initialize Prisma client with the new DATABASE_URL
function updateDatabaseUrlAndReinitialize() {
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

const champions_endpoint_uri = "https://ddragon.leagueoflegends.com/cdn/15.6.1/data/en_US/champion.json";

// Interfaces for Champions and Skins

interface Champion {
    id: string,
    champ_name: string,
    image_url: string,
    skins: Skin[],
    roles: Champion_Role[]
}

interface Champion_Role {
    role_id: number,
    role_name: string,

}

export interface Skin {
    skin_id: string;
    name: string;
    number: number;
}

// Fetch champion details
async function GetChampionDetails(champId: string) {
    let response = await axios.get(`https://ddragon.leagueoflegends.com/cdn/15.6.1/data/en_US/champion/${champId}.json`);
    return response.data.data;
}

class DatabaseSeeder {
    private champions_list: Champion[] = [];
    private roles: string[] = ["Marksman", "Fighter", "Assassin", "Mage", "Support", "Tank"]

    public async fetchChampionsInfo(): Promise<void> {
        let response = await axios.get(champions_endpoint_uri);
        let champions_response = response.data.data;

        this.champions_list = await Promise.all(
            Object.values(champions_response).map(async (champ: any) => {
                const champ_info = await GetChampionDetails(champ.id);
                // @ts-ignore
                // @ts-ignore
                return {
                    id: champ.id,
                    champ_name: champ.name,
                    image_url: `https://ddragon.leagueoflegends.com/cdn/15.6.1/img/champion/${champ.image.full}`,
                    roles: await Promise.all(
                        (champ_info?.[champ.id]?.tags || []).map(async (tag) => {
                            const role = await prisma.role.findFirst({
                                where: {role_name: tag}
                            });

                            // @ts-ignore
                            // @ts-ignore
                            return {
                                role_id: role.role_id,// Handle case where role isn't found
                                role_name: role.role_name
                            };
                        })
                    )
                    ,
                    skins: (champ_info?.[champ.id]?.skins || []).map((skin: any) => ({
                        skin_id: skin.id,
                        name: skin.name,
                        number: skin.num,
                    }))

                };
            })
        );
    }

    public async seedDB() {
        // @ts-ignore
        for (const [index, role] of this.roles.entries()) {
            await prisma.role.upsert({
                where: {role_id: index + 1}, // Check if role already exists
                update: {role_name: role}, // Update if exists
                create: {
                    role_name: role,
                    role_id: index + 1
                }
            });
        }

        await this.fetchChampionsInfo();

        for (const champ of this.champions_list) {

            await prisma.champion.upsert({
                where: {id: champ.id},
                update: {},
                create: {
                    id: champ.id,
                    champ_name: champ.champ_name,
                    image_url: champ.image_url,
                    skins: {
                        create: champ.skins.map(skin => ({
                            id: skin.skin_id,
                            skin_name: skin.name,
                            skin_number: skin.number,
                        }))
                    },
                    roles: {
                        create: champ.roles.map(role => ({
                            role: {
                                connect: {
                                    role_id: role.role_id
                                }
                            },
                        })),
                    }

                }
            });
        }
        console.log("Database seeded successfully.");
    }
}

(async () => {
    const dbSeeder = new DatabaseSeeder();
    await dbSeeder.seedDB();
})();
