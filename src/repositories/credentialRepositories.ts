import { prisma } from '../postgress';
import { TypeCredentiaCriptedlData } from '../types/credentialsTypes';

export async function insert(credential: TypeCredentiaCriptedlData, userId: number, password:string) {
    console.log(password)
  await prisma.credential.create({ data: {userId, password, ...credential }});
}