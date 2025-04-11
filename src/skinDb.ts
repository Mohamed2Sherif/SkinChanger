import { PrismaClient } from '../prisma/src/generated/prisma/client';
import axios from "axios";
import path from "path";
import EventEmitter from "events";

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

interface Skin {
    skin_id: string;
    name: string;
    number: number;
}

class DatabaseSeeder {
    private champions_list: Champion[] = [];
    private readonly roles = ["Marksman", "Fighter", "Assassin", "Mage", "Support", "Tank"];
    private apiVersion: string = "";

    private async getApiVersion(): Promise<string> {
        const response = await axios.get("https://ddragon.leagueoflegends.com/api/versions.json");
        return response.data[0];
    }

    private async getChampionDetails(champId: string): Promise<any> {
        return axios.get(`https://ddragon.leagueoflegends.com/cdn/${this.apiVersion}/data/en_US/champion/${champId}.json`)
            .then(response => response.data.data);
    }

    public async fetchChampionsInfo(): Promise<void> {
        this.apiVersion = await this.getApiVersion();
        const championsEndpoint = `https://ddragon.leagueoflegends.com/cdn/${this.apiVersion}/data/en_US/champion.json`;

        const response = await axios.get(championsEndpoint);
        const championsResponse = response.data.data;

        this.champions_list = await Promise.all(
            Object.values(championsResponse).map(async (champ: any) => {
                const champInfo = await this.getChampionDetails(champ.id);
                const tags = champInfo?.[champ.id]?.tags || [];

                const roles = await Promise.all(
                    tags.map(async (tag: string) => {
                        const role = await prisma.role.findFirst({
                            where: { role_name: tag }
                        });
                        return {
                            role_id: role?.role_id || 0,
                            role_name: role?.role_name || tag
                        };
                    })
                ).then(results => results.filter(r => r.role_id !== 0));

                return {
                    id: parseInt(champ.key),
                    champ_code: champ.id,
                    champ_name: champ.name,
                    image_url: `https://ddragon.leagueoflegends.com/cdn/${this.apiVersion}/img/champion/${champ.image.full}`,
                    roles,
                    skins: (champInfo?.[champ.id]?.skins || []).map((skin: any) => ({
                        skin_id: skin.id,
                        name: skin.name,
                        number: skin.num,
                    }))
                };
            })
        );
    }

    public async seedRoles() {
        await Promise.all(
            this.roles.map(async (role, index) => {
                await prisma.role.upsert({
                    where: { role_id: index + 1 },
                    update: { role_name: role },
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
                    where: { id: champ.id },
                    update: {
                        image_url:champ.image_url,
                        skins: {
                            deleteMany: {},
                            create: champ.skins.map(skin => ({
                                id: skin.skin_id,
                                skin_name: skin.name,
                                skin_number: skin.number,
                            })),
                        },
                    },
                    create: {
                        id: champ.id,
                        champ_code: champ.champ_code,
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
            })
        );
    }
    public async seedGameSettings(){
        await prisma.gameSettings.upsert({
            where:{settings_Id:"default"},
            update:{patchVersion:this.apiVersion},
            create:{
                settings_Id:"default",
                game_path:"",
                patchVersion:this.apiVersion,
            }
        })
    }
    public async compareVersions(){
        this.apiVersion = await this.getApiVersion();
        const gameSettingsObj = await prisma.gameSettings.findFirst({
            where:{settings_Id:"default"},
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
        if (!matching){
            await dbSeeder.seedDB();
        }
    } catch (error) {
        console.error("Application error:", error);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
})();