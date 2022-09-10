import { Router } from "express";
import { schemaValidator}  from "../middlewares/schemaValidator";
import signIn from "../controllers/signInController";
import createCredentailSchema from "../schemas/createCredentailSchema";
import { createCredentials, searchcredential, searchcredentialbyid, deleteCredential } from "../controllers/credentialControllers";
import validateUser from "../middlewares/tokenValidator"


const credentials = Router();

credentials.post('/createcredential', schemaValidator(createCredentailSchema), validateUser, createCredentials);
credentials.get('/searchcredential', schemaValidator(createCredentailSchema), validateUser, searchcredential);
credentials.get('/searchcredential/:id', schemaValidator(createCredentailSchema), validateUser, searchcredentialbyid);
credentials.delete('/deletecredential/:id', schemaValidator(createCredentailSchema), validateUser, deleteCredential);

export default credentials;

