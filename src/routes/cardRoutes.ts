import { Router } from "express";
import { schemaValidator}  from "../middlewares/schemaValidator";
import createCardSchema from "../schemas/cardSchema";
import { createCard, searchCard, searchCardbyid, deleteCard } from "../controllers/cardControllers";
import validateUser from "../middlewares/tokenValidator"

const credentials = Router();

credentials.post('/createcard', schemaValidator(createCardSchema), validateUser, createCard);
credentials.get('/searchcard', schemaValidator(createCardSchema), validateUser, searchCard);
credentials.get('/searchcard/:id', schemaValidator(createCardSchema), validateUser, searchCardbyid);
credentials.delete('/deletecard/:id', schemaValidator(createCardSchema), validateUser, deleteCard);

export default credentials;