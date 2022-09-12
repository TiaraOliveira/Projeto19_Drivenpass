import { prisma } from '../postgress';
import { TypeCardCriptedlData } from '../types/cardTypes';



export async function existscardTag(cardTag: string) {
  return await prisma.card.findFirst({
    where: {
      cardTag: cardTag 
     
    },
    
  });
}
export async function insert(card: TypeCardCriptedlData, userId: number, password:string, cvc: string) {
   console.log(cvc)
 
 const x =   await prisma.card.create({ data: {userId, ...card, password, cvc}});
 console.log(x)
}


export async function getAllCards(userId: number,) {
  return await prisma.card.findMany({
    where: {
      userId: userId
    },
    
  });
}

export async function findCardById(questionId: number, userId: number,) {
  return await prisma.card.findUnique({
    where: {
      id: questionId
    },
    
  });
}


export async function deleteCard(questionId: number, userId: number,) {
  return await prisma.card.delete({
    where: {
      id: questionId
    },
    
  });
}


export async function verifyidanduserId(cardId: number, userId: number) {
  console.log(cardId)
  console.log(userId)
  return await prisma.card.findFirst({
    where: {
      id: cardId ,
      userId: userId
    },
    
  });
}
