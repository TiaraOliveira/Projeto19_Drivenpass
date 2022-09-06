import { Router } from "express";
import { schemaValidator}  from "../middlewares/schemaValidator.js";
import signSchema from "../schemas/signSchema";
import signInValidator from "../middlewares/signInValidator.js";
import signIn from "../controllers/signInController.js";

const credentials = Router();

credentials.post('/createcredential', schemaValidator(signSchema), signInValidator, signIn);
credentials.post('/searchcredential', schemaValidator(signSchema), signInValidator, signIn);
credentials.post('/deletecredential', schemaValidator(signSchema), signInValidator, signIn);

export default credentials;