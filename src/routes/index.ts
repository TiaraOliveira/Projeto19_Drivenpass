import {Router} from "express";
import signUpRouter from "./signUpRouter";
import signInRouter from "./signInRouter";
import credentials from "./credentialRoutes";

const router = Router();

router.use(signInRouter);
router.use(signUpRouter);
router.use(credentials)

export default router;  