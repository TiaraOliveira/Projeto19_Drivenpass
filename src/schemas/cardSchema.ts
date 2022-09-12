import Joi from "joi";
import { TypeCardData } from "../types/cardTypes";


const createCardSchema = Joi.object<TypeCardData>({
    
  cardNumber: Joi.string().length(16).required(),
  cardName:  Joi.string().length(100).required(),
  cvc: Joi.string().length(3).required(),
  expiratedDate: Joi.date().required(),
  password: Joi.string().length(15).required(),
  isVirtual: Joi.boolean().strict().required(),
  type: Joi.valid('crédito', 'débito', 'ambos').required(),
  cardTag: Joi.string().length(50).required()
 

});
  
export default createCardSchema;