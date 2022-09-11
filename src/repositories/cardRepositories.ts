import { prisma } from '../postgress';
import { TypeCardCriptedlData } from '../types/cardTypes';

export async function insert(card: TypeCardCriptedlData, userId: number, password:string) {
    console.log(password)
  await prisma.card.create({ data: {userId, password, ...card }});
  
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