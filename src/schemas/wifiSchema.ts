import Joi from "joi";
import { TypeCredentialData } from "../types/credentialsTypes";


const createCredentailSchema = Joi.object<TypeCredentialData>({
  userName: Joi.string().required(),
  url: Joi.string().uri().required(),
  password: Joi.string().required(),
  credentialTag: Joi.string().required()
});
  
export default createCredentailSchema;