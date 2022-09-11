import { Request, Response } from "express";
import * as safeNotesService from "../services/safeNotesService";
import Cryptr from "cryptr"



export async function createCredentials(req: Request, res: Response) {
  
  const userId:number = Number(res.locals.userId.id);
 
  const safeNote = req.body;
  
  await safeNotesService.insert(safeNote, userId );

  res.sendStatus(201);
}

export async function searchcredential(req: Request, res: Response) {
  
  const userId:number = Number(res.locals.userId.id);
 
  const safeNotes = await safeNotesService.getCredential(userId);

  res.status(200).send(safeNotes);
}

export async function searchcredentialbyid(req: Request, res: Response) {
  
  const userId:number = Number(res.locals.userId.id);
  const safeNoteId: number = Number(req.params.id);

  const safeNotes = await safeNotesService.getCredentialbyid(safeNoteId, userId);

  res.status(200).send(safeNotes);
}


export async function deleteCredential(req: Request, res: Response) {
  
  const userId:number = Number(res.locals.userId.id);
  const safeNoteId: number = Number(req.params.id);

  await safeNotesService.deleteCredential(safeNoteId, userId);

  res.sendStatus(201);
}