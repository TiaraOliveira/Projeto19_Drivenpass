import { Request, Response } from "express";
import * as credentialService from "../services/credentialService";
import Cryptr from "cryptr"



export async function createCredentials(req: Request, res: Response) {
  
  const userId:number = Number(res.locals.userId.id);
 
  const credential = req.body;
  const cryptr = new Cryptr("minha senha secreta")
  const password: string = cryptr.encrypt(credential.password)
  await credentialService.insert(credential, userId , password);

  res.sendStatus(201);
}
