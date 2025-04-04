import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient();

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
        },
    )
}

export async function get_champion_skins(champion_id: string) {
    return await prisma.skin.findMany({
        where: {champ_id: champion_id},
    })
}
