import { prisma } from '../postgress';
import { TypeSafeNoteData } from '../types/safeNotesTypes';

export async function insert(safeNote: TypeSafeNoteData, userId: number) {
   
  await prisma.safeNote.create({ data: {userId,...safeNote }});
  
}


export async function getAllSafeNotes(userId: number) {
  return await prisma.safeNote.findMany({
    where: {
      userId: userId
    },
    
  });
}

export async function findSafeNotesById(safeNoteId: number,  userId: number,) {
  return await prisma.safeNote.findUnique({
    where: {
      id: safeNoteId
    },
    
  });
}


export async function deleteSafeNotes(safeNoteId: number, userId: number,) {
  return await prisma.safeNote.delete({
    where: {
      id: safeNoteId
    },
    
  });
}