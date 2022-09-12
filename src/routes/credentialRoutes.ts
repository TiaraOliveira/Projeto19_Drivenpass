import { Router } from "express";
import { schemaValidator}  from "../middlewares/schemaValidator";
import createCredentailSchema from "../schemas/createCredentailSchema";
import { createCredentials, searchcredential, searchcredentialbyid, deleteCredential } from "../controllers/credentialControllers";
import validateUser from "../middlewares/tokenValidator"


const credentials = Router();

credentials.post('/createcredential', schemaValidator(createCredentailSchema), validateUser, createCredentials);
credentials.get('/searchcredential', validateUser, searchcredential);
credentials.get('/searchcredential/:id',  validateUser, searchcredentialbyid);
credentials.delete('/deletecredential/:id', validateUser, deleteCredential);

export default credentials;

