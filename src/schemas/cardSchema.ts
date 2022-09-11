import Joi from "joi";
import { TypeCardData } from "../types/cardTypes";


const createCardSchema = Joi.object<TypeCardData>({
    
  cardNumber: Joi.number().required(),
  cardName:  Joi.string().required(),
  cvc: Joi.number().required(),
  expiratedDate: Joi.date().required(),
  password: Joi.string().required(),
  isVirtual: Joi.boolean().required(),
  type: Joi.valid('crédito', 'débito', 'crédito e débito').required(),
  cardTag: Joi.string().required()
 

});
  
export default createCardSchema;