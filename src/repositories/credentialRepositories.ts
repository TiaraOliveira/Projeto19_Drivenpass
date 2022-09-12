import { prisma } from '../postgress';
import { TypeCredentiaCriptedlData } from '../types/credentialsTypes';


export async function existscredentialTag(credentialTag: string) {
  return await prisma.credential.findFirst({
    where: {
      credentialTag: credentialTag 
     
    },
    
  });
}

export async function insert(credential: TypeCredentiaCriptedlData, userId: number, password:string) {
  await prisma.credential.create({ data: {userId, ...credential, password, }});
  
}


export async function getAllCredential(userId: number,) {
  return await prisma.credential.findMany({
    where: {
      userId: userId, 
      },
  });

  
}

export async function findCredentialById(credentialId: number, userId: number,) {
  return await prisma.credential.findUnique({
    where: {
      id: credentialId
    },
    
  });
}


export async function deleteCredential(credentialId: number, userId: number,) {
  return await prisma.credential.delete({
    where: {
      id: credentialId
    },
    
  });
}

export async function verifyidanduserId(credentialId: number, userId: number) {
  return await prisma.credential.findFirst({
    where: {
      id: credentialId ,
      userId: userId
    },
    
  });
}
