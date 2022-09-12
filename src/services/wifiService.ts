import * as wifiRepositories from '../repositories/wifiRepositories';
import { TypeWifiCriptedlData } from '../types/wifiTypes';
import Cryptr from "cryptr"
const cryptr = new Cryptr("minha senha secreta")


export async function insert(wifis: TypeWifiCriptedlData, userId: number, password:string) {
 
  const verifiedexist =  await wifiRepositories.existwifiTag(wifis.wifiTag)

  if(verifiedexist) throw {type: "error_bad_request",
    message: `Titulo já existente`}
 
  await wifiRepositories.insert(wifis, userId, password);
  
}

export async function getwifi(userId: number,) {


  const sucess = await wifiRepositories.getAllwifi(userId);
  
  if(!sucess) throw {type: "error_not_found",
    message: `Could not find specified!`}
    
    sucess.forEach(e => {return e.password = cryptr.decrypt(e.password);})
    return sucess
 
}

export async function getwifibyid(wifiId: number, userId: number,) {


  const findid = await wifiRepositories.findwifiById(wifiId, userId);

  if(!findid) {
    throw { type: 'error_not_found', message: 'Id inexistente'  }
  }

  findid.password = cryptr.decrypt( findid.password)  
    return findid

  
}

export async function deletewifi(wifiId: number, userId: number,) {

  const findid = await wifiRepositories.findwifiById(wifiId, userId);

  if(!findid) {
    throw { type: 'error_not_found', message: 'Id não encontrado'  }
  }

const belowsusers = await wifiRepositories.verifyidanduserId(wifiId, userId)
   if(!belowsusers) throw {type: "error_bad_request",
        message: `Não pertence`}

  const sucess = wifiRepositories.deletewifi(wifiId, userId);
  
  if(!sucess) throw {type: "error_bad_request",
    message: `Could not find specified!`}
    return sucess


}