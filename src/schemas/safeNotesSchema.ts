import Joi from "joi";
import { TypeSafeNoteData } from "../types/safeNotesTypes";


const createCredentailSchema = Joi.object<TypeSafeNoteData>({
  safeNotetitle: Joi.string().max(50).required(),
  text: Joi.string().max(1000).required(),
});
  
export default createCredentailSchema;