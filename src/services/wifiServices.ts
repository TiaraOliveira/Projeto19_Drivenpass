import * as cardRepositories from '../repositories/cardRepositories';
import { TypeCredentiaCriptedlData } from '../types/credentialsTypes';



export async function insert(credential: TypeCredentiaCriptedlData, userId: number, password:string) {
 
  await cardRepositories.insert(credential, userId, password);
}

export async function getCredential(userId: number,) {
  return await cardRepositories.getAllCredential(userId);
}

export async function getCredentialbyid(credentialId: number, userId: number,) {
  return await cardRepositories.findCredentialById(credentialId, userId);
}

export async function deleteCredential(credentialId: number, userId: number,) {
  return await cardRepositories.deleteCredential(credentialId, userId);
}