import Joi from "joi";
import { TypeCardData } from "../types/cardTypes";


const createCardSchema = Joi.object<TypeCardData>({
    
  cardNumber: Joi.string().length(16).required(),
  cardName:  Joi.string().required(),
  cvc: Joi.string().length(3).required(),
  expiratedDate: Joi.date().required(),
  password: Joi.string().required(),
  isVirtual: Joi.boolean().strict().required(),
  type: Joi.valid('crédito', 'débito', 'ambos').required(),
  cardTag: Joi.string().required()
 

});
  
export default createCardSchema;