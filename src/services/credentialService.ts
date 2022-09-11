import * as credentialRepositories from '../repositories/credentialRepositories';
import { TypeCredentiaCriptedlData } from '../types/credentialsTypes';



export async function insert(credential: TypeCredentiaCriptedlData, userId: number, password:string) {
  const verifiedexist =  await credentialRepositories.existscredentialTag(credential.credentialTag)

  if(verifiedexist) throw {type: "error_bad_request",
    message: `Titulo já existente`}

  await credentialRepositories.insert(credential, userId, password);
  
}

export async function getCredential(userId: number,) {
  const sucess = await credentialRepositories.getAllCredential(userId);
  if(sucess) throw {type: "error_not_found",
    message: `Could not find specified!`}
    return sucess
}

export async function getCredentialbyid(credentialId: number, userId: number,) {
  const findid = await credentialRepositories.findCredentialById(credentialId, userId);

  if(!findid) {
    throw { type: 'error_not_found', message: 'Funcionário não encontrado'  }
  }
    return findid
}

export async function deleteCredential(credentialId: number, userId: number,) {
  const findid = await credentialRepositories.findCredentialById(credentialId, userId);

  if(!findid) {
    throw { type: 'error_not_found', message: 'Id não encontrado'  }
  }

const belowsusers = await credentialRepositories.verifyidanduserId(credentialId, userId)
   if(!belowsusers) throw {type: "error_bad_request",
        message: `Não pertence`}

  const sucess = await credentialRepositories.deleteCredential(credentialId, userId);
  
  if(!sucess) throw {type: "error_bad_request",
    message: `Could not find specified!`}
    return sucess
}