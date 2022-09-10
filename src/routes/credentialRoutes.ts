import { Router } from "express";
import { schemaValidator}  from "../middlewares/schemaValidator";
import signInValidator from "../middlewares/signInValidator";
import signIn from "../controllers/signInController";
import createCredentailSchema from "../schemas/createCredentailSchema";
import { createCredentials } from "../controllers/credentialControllers";
import validateUser from "../middlewares/tokenValidator"


const credentials = Router();

credentials.post('/createcredential', schemaValidator(createCredentailSchema), validateUser, createCredentials);
credentials.post('/searchcredential', schemaValidator(createCredentailSchema), signInValidator, signIn);
credentials.post('/deletecredential', schemaValidator(createCredentailSchema), signInValidator, signIn);

export default credentials;

