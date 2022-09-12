import { Request, Response } from "express";
import * as safeNotesService from "../services/safeNotesService";
import Cryptr from "cryptr"



export async function createsafeNotesSchema(req: Request, res: Response) {
  
  const userId:number = Number(res.locals.userId.id);
 
  const safeNote = req.body;
  
  await safeNotesService.insert(safeNote, userId );
  
  res.sendStatus(201);
}

export async function searchsafeNotesSchema(req: Request, res: Response) {
  
  const userId:number = Number(res.locals.userId.id);
 
  const safeNotes = await safeNotesService.getSafeNotes(userId);

  res.status(200).send(safeNotes);
}

export async function searchsafeNotesSchemabyid(req: Request, res: Response) {
  
  const userId:number = Number(res.locals.userId.id);
  const safeNoteId: number = Number(req.params.id);

  const safeNotes = await safeNotesService.getSafeNoteslbyid(safeNoteId, userId);

  res.status(200).send(safeNotes);
}


export async function deletesafeNotesSchema(req: Request, res: Response) {
  
  const userId:number = Number(res.locals.userId.id);
  const safeNoteId: number = Number(req.params.id);

  await safeNotesService.deleteSafeNotes(safeNoteId, userId);

  res.sendStatus(201);
}