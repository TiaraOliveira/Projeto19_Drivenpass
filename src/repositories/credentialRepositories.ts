import { prisma } from '../postgress';
import { TypeCredentiaCriptedlData } from '../types/credentialsTypes';

export async function insert(credential: TypeCredentiaCriptedlData, userId: number, password:string) {
    console.log(password)
  await prisma.credential.create({ data: {userId, password, ...credential }});
  
}


export async function getAllCredential(userId: number,) {
  return await prisma.credential.findMany({
    where: {
      userId: userId
    },
    
  });
}

export async function findCredentialById(questionId: number, userId: number,) {
  return await prisma.credential.findUnique({
    where: {
      id: questionId
    },
    
  });
}


export async function deleteCredential(questionId: number, userId: number,) {
  return await prisma.credential.delete({
    where: {
      id: questionId
    },
    
  });
}