import * as SafeNotesRepositories from '../repositories/safeNotesRepositories';
import { TypeSafeNoteData } from '../types/safeNotesTypes';



export async function insert(safeNote: TypeSafeNoteData, userId: number) {
 
 const verifiedexist =  await SafeNotesRepositories.existsTittle(safeNote.safeNotetitle, userId)

  if(verifiedexist) throw {type: "error_bad_request",
    message: `Titulo já existente`}
  await SafeNotesRepositories.insert(safeNote, userId);
  
}

export async function getSafeNotes(userId: number,) {

  const sucess = await SafeNotesRepositories.getAllSafeNotes(userId);
  if(!sucess) throw {type: "error_not_found",
    message: `Could not find specified!`}
    
  
  return sucess
}

export async function getSafeNoteslbyid(safeNoteId: number, userId: number,) {
  const findid = await SafeNotesRepositories.findSafeNotesById(safeNoteId, userId);
  if(!findid) {
    throw { type: 'error_not_found', message: 'Id inexistente'  }
  }
  const belowsusers = await SafeNotesRepositories.verifyidanduserId(safeNoteId, userId)
   if(!belowsusers) throw {type: "error_bad_request",
        message: `Não pertence`}


    return findid
}

export async function deleteSafeNotes(safeNoteId: number, userId: number,) {

  const findid = await SafeNotesRepositories.findSafeNotesById(safeNoteId, userId);

  if(!findid) {
    throw { type: 'error_not_found', message: 'Id não encontrado'  }
  }

const belowsusers = await SafeNotesRepositories.verifyidanduserId(safeNoteId, userId)
   if(!belowsusers) throw {type: "error_bad_request",
        message: `Não pertence`}

  const sucess = await SafeNotesRepositories.deleteSafeNotes(safeNoteId, userId);
  
  if(!sucess) throw {type: "error_bad_request",
    message: `Could not find specified!`}
    return sucess
}