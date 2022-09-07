import { Router } from "express";
import  {schemaValidator } from "../middlewares/schemaValidator";
import signSchema from "../schemas/signSchema";
import signUpValidator from "../middlewares/signUpValidator";
import signUp from "../controllers/signUpController";



const signUpRouter = Router();

signUpRouter.post('/signup', schemaValidator(signSchema), signUpValidator, signUp);

export default signUpRouter;
