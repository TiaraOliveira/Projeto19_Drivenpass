import { prisma } from '../postgress';

export async function getUserByEmail(email: string){
    const result = prisma.users.findUnique({where: {email}})
    return result
}

export async function createUser(user: { email: any; password: any; userName: any; pictureUrl: any; }){
    await prisma.users.create({ data: user });
    
}
