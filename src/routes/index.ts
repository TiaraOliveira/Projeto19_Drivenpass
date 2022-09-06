import {Router} from "express";
import cardRouter from "./signInRouter";

const router = Router();

router.use(cardRouter);


export default router;  