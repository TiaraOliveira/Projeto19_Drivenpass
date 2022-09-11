import * as cardRepositories from '../repositories/cardRepositories';
import { TypeCardCriptedlData } from '../types/cardTypes';

export async function insert(card: TypeCardCriptedlData, userId: number, password:string) {
   await cardRepositories.insert(card, userId, password);
}

export async function getCard(userId: number,) {
  return await cardRepositories.getAllCards(userId);
}

export async function getCardbyid(cardId: number, userId: number,) {
  return await cardRepositories.findCardById(cardId, userId);
}

export async function deleteCard(cardId: number, userId: number,) {
  return await cardRepositories.deleteCard(cardId, userId);
}