import * as credentialService from '../repositories/credentialRepositories';
import { TypeCredentiaCriptedlData } from '../types/credentialsTypes';



export async function insert(credential: TypeCredentiaCriptedlData, userId: number, password:string) {
 
  await credentialService.insert(credential, userId, password);
}