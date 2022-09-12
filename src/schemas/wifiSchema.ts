import Joi from "joi";
import { TypeWifiData } from "../types/wifiTypes";


const createCredentailSchema = Joi.object<TypeWifiData>({
  networkName: Joi.string().required(),
   password: Joi.string().required(),
   wifiTag: Joi.string().required()
});
  
export default createCredentailSchema;

