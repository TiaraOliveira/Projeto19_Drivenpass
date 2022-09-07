import { Router } from "express";
import { schemaValidator}  from "../middlewares/schemaValidator";
import signInValidator from "../middlewares/signInValidator";
import signIn from "../controllers/signInController";
import createCredentailSchema from "../schemas/createCredentailSchema";
import createCredentialValidator from "../middlewares/createCredentialValidator";

const credentials = Router();

credentials.post('/createcredential', schemaValidator(createCredentailSchema), createCredentialValidator, signIn);
credentials.post('/searchcredential', schemaValidator(createCredentailSchema), signInValidator, signIn);
credentials.post('/deletecredential', schemaValidator(createCredentailSchema), signInValidator, signIn);

export default credentials;


