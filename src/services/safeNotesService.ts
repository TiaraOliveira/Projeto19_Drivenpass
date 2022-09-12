import * as SafeNotesRepositories from '../repositories/safeNotesRepositories';
import { TypeSafeNoteData } from '../types/safeNotesTypes';



export async function insert(safeNote: TypeSafeNoteData, userId: number) {
 
 const verifiedexist =  await SafeNotesRepositories.existsTittle(safeNote.safeNotetitle)

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
    return findid
}

export async function deleteSafeNotes(credentialId: number, userId: number,) {

  const findid = await SafeNotesRepositories.findSafeNotesById(credentialId, userId);

  if(!findid) {
    throw { type: 'error_not_found', message: 'Id não encontrado'  }
  }

const belowsusers = await SafeNotesRepositories.verifyidanduserId(credentialId, userId)
   if(!belowsusers) throw {type: "error_bad_request",
        message: `Não pertence`}

  const sucess = await SafeNotesRepositories.deleteSafeNotes(credentialId, userId);
  
  if(!sucess) throw {type: "error_bad_request",
    message: `Could not find specified!`}
    return sucess
}