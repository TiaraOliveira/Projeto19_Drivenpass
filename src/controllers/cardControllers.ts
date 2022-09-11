import { Request, Response } from "express";
import * as cardService from "../services/cardService";
import Cryptr from "cryptr"



export async function createCard(req: Request, res: Response) {
  
  const userId:number = Number(res.locals.userId.id);
 
  const card = req.body;
  const cryptr = new Cryptr("minha senha secreta")
  const password: string = cryptr.encrypt(card.password)
  await cardService.insert(card, userId , password);

  res.sendStatus(201);
}

export async function searchCard(req: Request, res: Response) {
  
  const userId:number = Number(res.locals.userId.id);
 
  const cards = await cardService.getCard(userId);

  res.status(200).send(cards);
}

export async function searchCardbyid(req: Request, res: Response) {
  
  const userId:number = Number(res.locals.userId.id);
  const cardId: number = Number(req.params.id);

  const credential = await cardService.getCardbyid(cardId, userId);

  res.status(200).send(credential);
}


export async function deleteCard(req: Request, res: Response) {
  
  const userId:number = Number(res.locals.userId.id);
  const cardId: number = Number(req.params.id);

  await cardService.deleteCard(cardId, userId);

  res.sendStatus(201);
}