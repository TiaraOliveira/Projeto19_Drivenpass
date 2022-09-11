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

export async function searchcredential(req: Request, res: Response) {
  
  const userId:number = Number(res.locals.userId.id);
 
  const credential = await credentialService.getCredential(userId);

  res.status(200).send(credential);
}

export async function searchcredentialbyid(req: Request, res: Response) {
  
  const userId:number = Number(res.locals.userId.id);
  const credentialId: number = Number(req.params.id);

  const credential = await credentialService.getCredentialbyid(credentialId, userId);

  res.status(200).send(credential);
}


export async function deleteCredential(req: Request, res: Response) {
  
  const userId:number = Number(res.locals.userId.id);
  const credentialId: number = Number(req.params.id);

  await credentialService.deleteCredential(credentialId, userId);

  res.sendStatus(201);
}