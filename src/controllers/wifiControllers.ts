import { Request, Response } from "express";
import * as wifiService from "../services/wifiService";
import Cryptr from "cryptr"



export async function createwifi(req: Request, res: Response) {
  
  const userId:number = Number(res.locals.userId.id);
 
  const wifi = req.body;
  const cryptr = new Cryptr("minha senha secreta")
  const password: string = cryptr.encrypt(wifi.password)
  await wifiService.insert(wifi, userId , password);

  res.sendStatus(201);
}

export async function searchwifi(req: Request, res: Response) {
  
  const userId:number = Number(res.locals.userId.id);
 
  const wifi = await wifiService.getwifi(userId);

  res.status(200).send(wifi);
}

export async function searchwifibyid(req: Request, res: Response) {
  
  const userId:number = Number(res.locals.userId.id);
  const wifiId: number = Number(req.params.id);

  const wifi = await wifiService.getwifibyid(wifiId, userId);

  res.status(200).send(wifi);
}


export async function deletewifi(req: Request, res: Response) {
  
  const userId:number = Number(res.locals.userId.id);
  const wifiId: number = Number(req.params.id);

  await wifiService.deletewifi(wifiId, userId);

  res.sendStatus(201);
}