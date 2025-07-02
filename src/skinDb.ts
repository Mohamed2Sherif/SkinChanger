import {PrismaClient} from '../prisma/src/generated/prisma/client';
import path from "path";
import EventEmitter from "events";
import fs from 'fs/promises';
import AxiosCustomInstance from "./c_axios"; // use the promise-based fs

// Initialize EventEmitter
const eventemitter = new EventEmitter();

// Database Initialization
function createPrismaClient() {
    return new PrismaClient();
}

function updateDatabaseUrlAndReinitialize() {
    const isDev = process.env.NODE_ENV === 'development';
    const dbPath = isDev
        ? path.join(__dirname, '../db', 'ExaltedSkins.db')
        : path.join(process.resourcesPath, 'app.asar.unpacked', 'db', 'ExaltedSkins.db');

    const dbUrl = `file:${path.normalize(dbPath)}`;
    process.env.DATABASE_URL = dbUrl;
    return createPrismaClient();
}

const prisma = updateDatabaseUrlAndReinitialize();

// Interfaces
interface Champion {
    id: number;
    champ_code: string;
    champ_name: string;
    image_url: string;
    skins: Skin[];
    roles: ChampionRole[];
}

interface ChampionRole {
    role_id: number;
    role_name: string;
}

interface Chroma {
    id: string;
    name: string;
    color: string;
    // Add other chroma properties as needed
}

interface Skin {
    skin_id: string;
    name: string;
    number: number;
    memory_haschromas: boolean;
    memory_chromas: Chroma[];
}

const formatSkins = (skins: Skin[], champId: number) =>
    skins.map((skin) => ({
        id: skin.skin_id,
        skin_name: skin.name,
        skin_number: skin.number,
        hasChromas: skin.memory_haschromas,
        Chromas: {
            create: skin.memory_chromas?.map((chroma) => ({
                chroma_id: chroma.id
                , color: chroma.color
            })) || []
        }
    }));

class DatabaseSeeder {
    private champions_list: Champion[] = [];
    private readonly roles = ["Marksman", "Fighter", "Assassin", "Mage", "Support", "Tank"];
    private apiVersion: string = "";

    private async getApiVersion(): Promise<string> {
        const response = await AxiosCustomInstance.getInstance().get("https://ddragon.leagueoflegends.com/api/versions.json");
        return response.data[0];
    }

    private async getChampionDetails(champId: string): Promise<any> {
        return   AxiosCustomInstance.getInstance().get(`https://ddragon.leagueoflegends.com/cdn/${this.apiVersion}/data/en_US/champion/${champId}.json`,{
            timeout:10000
        })
            .then(response => response.data.data);
    }

    private async fetchChromas(champKey: string, skinNum: number, retries = 3): Promise<Chroma[]> {
        const url = `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champions/${champKey}.json`;

        for (let attempt = 1; attempt <= retries; attempt++) {
            try {
                const controller = new AbortController();
                const timeout = setTimeout(() => controller.abort(), 15000);

                const response = await fetch(url, {
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
                        'Accept': 'application/json',
                        'Accept-Language': 'en-US,en;q=0.9'
                    },
                    signal: controller.signal
                });

                clearTimeout(timeout);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                const skinId = `${champKey}${skinNum.toString().padStart(3, '0')}`;
                const skin = data.skins?.find((s: any) => s.id.toString() === skinId);

                return skin?.chromas?.map((chroma: any) => ({
                    id: chroma.id.toString(),
                    name: chroma.name,
                    color: chroma.colors[0]
                })) || [];

            } catch (error) {
                if (attempt === retries) {
                    console.error(`Final attempt failed for champ ${champKey} skin ${skinNum}:`, error);
                    return [];
                }

                // Exponential backoff
                const delay = Math.pow(2, attempt) * 500;
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
        return [];
    }

    private async hasChromas(champKey: string, skinNum: number): Promise<boolean> {
        try {
            const chromas = await this.fetchChromas(champKey, skinNum);
            return chromas.length > 0;
        } catch (error) {
            console.error(`Non-retryable error for champ ${champKey} skin ${skinNum}:`, error);
            return false;
        }
    }

    public async fetchChampionsInfo(): Promise<void> {
        this.apiVersion = await this.getApiVersion();
        const championsEndpoint = `https://ddragon.leagueoflegends.com/cdn/${this.apiVersion}/data/en_US/champion.json`;

        const response =  await AxiosCustomInstance.getInstance().get(championsEndpoint);
        const championsResponse = response.data.data;

        this.champions_list = await Promise.all(
            Object.values(championsResponse).map(async (champ: any) => {
                // Add delay between champion requests (except first)
                await new Promise(resolve => setTimeout(resolve, 50 + Math.random() * 100));

                const champInfo = await this.getChampionDetails(champ.id);
                const tags = champInfo?.[champ.id]?.tags || [];

                const roles = await Promise.all(
                    tags.map(async (tag: string) => {
                        const role = await prisma.role.findFirst({
                            where: {role_name: tag}
                        });
                        return {
                            role_id: role?.role_id || 0,
                            role_name: role?.role_name || tag
                        };
                    })
                ).then(results => results.filter(r => r.role_id !== 0));

                // Process skins with proper async/await
                const skins = await Promise.all(
                    (champInfo?.[champ.id]?.skins || []).map(async (skin: any) => ({
                        skin_id: skin.id.toString(),
                        name: skin.name,
                        number: skin.num,
                        memory_haschromas: await this.hasChromas(champ.key, skin.num),
                        memory_chromas: await this.fetchChromas(champ.key, skin.num)
                    }))
                );

                return {
                    id: parseInt(champ.key),
                    champ_code: champ.id,
                    champ_name: champ.name,
                    image_url: `https://ddragon.leagueoflegends.com/cdn/${this.apiVersion}/img/champion/${champ.image.full}`,
                    roles,
                    skins
                };
            })
        );
    }

    public async seedRoles() {
        await Promise.all(
            this.roles.map(async (role, index) => {
                await prisma.role.upsert({
                    where: {role_id: index + 1},
                    update: {role_name: role},
                    create: {
                        role_name: role,
                        role_id: index + 1
                    }
                });
            })
        );
    }

    public async seedChampions() {
        await Promise.all(
            this.champions_list.map(async (champ) => {
                await prisma.champion.upsert({
                    where: {id: champ.id},
                    update: {
                        image_url: champ.image_url,
                        skins: {
                            deleteMany: {},
                            create: formatSkins(champ.skins, champ.id),
                        },
                    },
                    create: {
                        id: champ.id,
                        champ_code: champ.champ_code,
                        champ_name: champ.champ_name,
                        image_url: champ.image_url,
                        skins: {
                            create: formatSkins(champ.skins, champ.id)
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
            })
        );
    }


    public async seedGameSettings() {
        let client_installs_path = "C:/ProgramData/Riot Games/RiotClientInstalls.json";
        let league_path = "";
        try {
            const data = await fs.readFile(client_installs_path, "utf8");
            const json = JSON.parse(data);
            const associatedClients = json.associated_client;

            for (const gamePath in associatedClients) {
                if (gamePath.toLowerCase().includes("league of legends")) {
                    league_path = gamePath;
                    league_path+="Game";
                    break;
                }
            }
            await prisma.gameSettings.upsert({
                where: {settings_Id: "default"},
                update: {
                    patchVersion: this.apiVersion,
                },
                create: {
                    settings_Id: "default",
                    game_path: league_path,
                    patchVersion: this.apiVersion,
                }
            });
        } catch (err) {
            console.error("Error seeding game settings:", err);
        }
    }


    public async compareVersions() {
        this.apiVersion = await this.getApiVersion();
        const gameSettingsObj = await prisma.gameSettings.findFirst({
            where: {settings_Id: "default"},
        })
        return gameSettingsObj != null ? gameSettingsObj.patchVersion == this.apiVersion : false;
    }

    public async seedDB() {
        try {
            await this.seedRoles();
            await this.fetchChampionsInfo();
            await this.seedChampions();
            await this.seedGameSettings()
            console.log("Database seeded successfully.");
            eventemitter.emit("db_seeded");
        } catch (error) {
            console.error("Error seeding database:", error);
            throw error;
        }
    }
}

// Main execution
(async () => {
    try {
        const dbSeeder = new DatabaseSeeder();
        let matching = await dbSeeder.compareVersions()
        if (!matching) {
            await dbSeeder.seedDB();
        }
    } catch (error) {
        console.error("Application error:", error);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
})();