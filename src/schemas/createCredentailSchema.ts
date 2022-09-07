import Joi from "joi";


const createCredentailSchema = Joi.object({
  userName: Joi.string().required(),
  url: Joi.string().uri().required(),
  password: Joi.string().required(),
  credentialTag: Joi.string().required()
});
  
export default createCredentailSchema;