import * as cardRepositories from '../repositories/cardRepositories';
import { TypeCardCriptedlData } from '../types/cardTypes';
import Cryptr from "cryptr"
const cryptr = new Cryptr("minha senha secreta")

export async function insert(card: TypeCardCriptedlData, userId: number, password:string, cvc: string) {

 
  const verifiedexist =  await cardRepositories.existscardTag(card.cardTag)

  if(verifiedexist) throw {type: "error_bad_request",
    message: `Titulo já existente`}
    
 
   await cardRepositories.insert(card, userId, password, cvc);
}

export async function getCard(userId: number) {

  const sucess =  await cardRepositories.getAllCards(userId);

  if(!sucess) throw {type: "error_not_found",
    message: `Could not find specified!`}
    
    sucess.forEach(e => {return e.password = cryptr.decrypt(e.password);})
    sucess.forEach(e => {return e.cvc = cryptr.decrypt(e.cvc);})
    return sucess
}

export async function getCardbyid(cardId: number, userId: number,) {
  
  const findid = await cardRepositories.findCardById(cardId, userId);
  if(!findid) {
    throw { type: 'error_not_found', message: 'Id inexistente'  }
  }

  findid.password = cryptr.decrypt( findid.password)  
    return findid
}

export async function deleteCard(cardId: number, userId: number,) {

  const findid = await cardRepositories.findCardById(cardId, userId);

  if(!findid) {
    throw { type: 'error_not_found', message: 'Id não encontrado'  }
  }

const belowsusers = await cardRepositories.verifyidanduserId(cardId, userId)
   if(!belowsusers) throw {type: "error_bad_request",
        message: `Não pertence`}

  const sucess = await cardRepositories.deleteCard(cardId, userId);
  
  if(!sucess) throw {type: "error_bad_request",
    message: `Could not find specified!`}
    return sucess
 
}