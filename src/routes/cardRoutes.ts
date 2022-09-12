import { Router } from "express";
import { schemaValidator}  from "../middlewares/schemaValidator";
import createCardSchema from "../schemas/cardSchema";
import { createCard, searchCard, searchCardbyid, deleteCard } from "../controllers/cardControllers";
import validateUser from "../middlewares/tokenValidator"

const cardRouters = Router();

cardRouters.post('/createcard', schemaValidator(createCardSchema), validateUser, createCard);
cardRouters.get('/searchcard', schemaValidator(createCardSchema), validateUser, searchCard);
cardRouters.get('/searchcard/:id', schemaValidator(createCardSchema), validateUser, searchCardbyid);
cardRouters.delete('/deletecard/:id', schemaValidator(createCardSchema), validateUser, deleteCard);

export default cardRouters;