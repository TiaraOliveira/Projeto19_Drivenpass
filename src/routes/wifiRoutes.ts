import { Router } from "express";
import { schemaValidator}  from "../middlewares/schemaValidator";
import validateUser from "../middlewares/tokenValidator"
import { createwifi, deletewifi, searchwifi, searchwifibyid } from "../controllers/wifiControllers";
import wifiSchema from "../schemas/wifiSchema";


const wifiRoutes = Router();

wifiRoutes.post('/createwifi', schemaValidator(wifiSchema), validateUser, createwifi);
wifiRoutes.get('/searchwifi', schemaValidator(wifiSchema), validateUser, searchwifi);
wifiRoutes.get('/searchwifi/:id', schemaValidator(wifiSchema), validateUser, searchwifibyid);
wifiRoutes.delete('/deletewifi/:id', schemaValidator(wifiSchema), validateUser, deletewifi);

export default wifiRoutes;