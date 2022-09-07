import { Router } from "express";
import { schemaValidator}  from "../middlewares/schemaValidator";
import signSchema from "../schemas/signSchema";
import signInValidator from "../middlewares/signInValidator";
import signIn from "../controllers/signInController";

const signInRouter = Router();

signInRouter.post('/signin', schemaValidator(signSchema), signInValidator, signIn);

export default signInRouter;
