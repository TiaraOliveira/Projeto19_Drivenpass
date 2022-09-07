import { Router } from "express";
import { schemaValidator}  from "../middlewares/schemaValidator.js";
import signInValidator from "../middlewares/signInValidator.js";
import signIn from "../controllers/signInController.js";
import createCredentailSchema from "../schemas/createCredentailSchema";

const credentials = Router();

credentials.post('/createcredential', schemaValidator(createCredentailSchema), signInValidator, signIn);
credentials.post('/searchcredential', schemaValidator(createCredentailSchema), signInValidator, signIn);
credentials.post('/deletecredential', schemaValidator(createCredentailSchema), signInValidator, signIn);

export default credentials;