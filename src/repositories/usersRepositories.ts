import { prisma } from '../postgress';

export async function getUserByEmail(email: string){
    console.log(email)
    const result = prisma.users.findUnique({where: {email}})
    console.log(result)
    return result
}

export async function createUser(user: { email: any; password: any; userName: any; pictureUrl: any; }){
    await prisma.users.create({ data: user });
    
}

export async function findAll() {
    const result = await prisma.users.findMany();
    return result;
  }
  
