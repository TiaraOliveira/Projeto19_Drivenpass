import { Router } from "express";
import { schemaValidator}  from "../middlewares/schemaValidator";
import createCardSchema from "../schemas/cardSchema";
import { createCard, searchCard, searchCardbyid, deleteCard } from "../controllers/cardControllers";
import validateUser from "../middlewares/tokenValidator"

const cardRouters = Router();

cardRouters.post('/createcard', schemaValidator(createCardSchema), validateUser, createCard);
cardRouters.get('/searchcard', validateUser, searchCard);
cardRouters.get('/searchcard/:id', validateUser, searchCardbyid);
cardRouters.delete('/deletecard/:id', validateUser, deleteCard);

export default cardRouters;