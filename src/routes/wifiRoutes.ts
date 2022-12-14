import { Router } from "express";
import { schemaValidator}  from "../middlewares/schemaValidator";
import validateUser from "../middlewares/tokenValidator"
import { createwifi, deletewifi, searchwifi, searchwifibyid } from "../controllers/wifiControllers";
import wifiSchema from "../schemas/wifiSchema";


const wifiRoutes = Router();

wifiRoutes.post('/createwifi', schemaValidator(wifiSchema), validateUser, createwifi);
wifiRoutes.get('/searchwifi', validateUser, searchwifi);
wifiRoutes.get('/searchwifi/:id', validateUser, searchwifibyid);
wifiRoutes.delete('/deletewifi/:id', validateUser, deletewifi);

export default wifiRoutes;