import {Router} from "express";
import signUpRouter from "./signUpRouter";
import signInRouter from "./signInRouter";
import credentials from "./credentialRoutes";
import safeNotesRoutes from "./notesRoutes";
import cardRouters from "./cardRoutes";
import wifiRoutes from "./wifiRoutes";

const router = Router();

router.use(signInRouter);
router.use(signUpRouter);
router.use(credentials)
router.use(safeNotesRoutes)
router.use(cardRouters)
router.use(wifiRoutes)

export default router;  