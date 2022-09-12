import { prisma } from '../postgress';
import { TypeWifiCriptedlData } from '../types/wifiTypes';




export async function existwifiTag(wifiTag: string) {
  return await prisma.wifi.findFirst({
    where: {
      wifiTag: wifiTag 
     
    },
    
  });
}
export async function insert(credential: TypeWifiCriptedlData, userId: number, password:string) {
    
  await prisma.wifi.create({ data: {userId,...credential, password }});
  
}


export async function getAllwifi(userId: number,) {
  
  return await prisma.wifi.findMany({
    where: {
      userId: userId
    },
    
  });
}

export async function findwifiById(questionId: number, userId: number,) {
  return await prisma.wifi.findUnique({
    where: {
      id: questionId
    },
    
  });
}


export async function deletewifi(questionId: number, userId: number,) {
  return await prisma.wifi.delete({
    where: {
      id: questionId
    },
    
  });
}



export async function verifyidanduserId(wifiId: number, userId: number) {
  return await prisma.wifi.findFirst({
    where: {
      id: wifiId ,
      userId: userId
    },
    
  });
}
