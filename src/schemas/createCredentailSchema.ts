import Joi from "joi";

const createCredentailSchema = Joi.object({
  content: Joi.string().required(),
  id: Joi.number().integer().required()
});
  
export default createCredentailSchema;