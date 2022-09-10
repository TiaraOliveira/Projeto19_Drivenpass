import * as credentialRepositories from '../repositories/credentialRepositories';
import { TypeCredentiaCriptedlData } from '../types/credentialsTypes';



export async function insert(credential: TypeCredentiaCriptedlData, userId: number, password:string) {
 
  await credentialRepositories.insert(credential, userId, password);
}

export async function getCredential(userId: number,) {
  return await credentialRepositories.getAllCredential(userId);
}

export async function getCredentialbyid(credentialId: number, userId: number,) {
  return await credentialRepositories.findCredentialById(credentialId, userId);
}

export async function deleteCredential(credentialId: number, userId: number,) {
  return await credentialRepositories.deleteCredential(credentialId, userId);
}