import Joi from "joi";
import { TypeSafeNoteData } from "../types/safeNotesTypes";


const createCredentailSchema = Joi.object<TypeSafeNoteData>({
  safeNotetitle: Joi.string().required(),
  text: Joi.string().required(),
});
  
export default createCredentailSchema;