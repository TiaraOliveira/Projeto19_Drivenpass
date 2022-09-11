import * as SafeNotesRepositories from '../repositories/safeNotesRepositories';
import { TypeSafeNoteData } from '../types/safeNotesTypes';



export async function insert(safeNote: TypeSafeNoteData, userId: number) {
 
  await SafeNotesRepositories.insert(safeNote, userId);
}

export async function getCredential(userId: number,) {
  return await SafeNotesRepositories.getAllSafeNotes(userId);
}

export async function getCredentialbyid(safeNoteId: number, userId: number,) {
  return await SafeNotesRepositories.findSafeNotesById(safeNoteId, userId);
}

export async function deleteCredential(credentialId: number, userId: number,) {
  return await SafeNotesRepositories.deleteSafeNotes(credentialId, userId);
}