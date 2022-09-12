import { Router } from "express";
import { schemaValidator}  from "../middlewares/schemaValidator";
import validateUser from "../middlewares/tokenValidator"
import safeNotesSchema from "../schemas/safeNotesSchema";
import { createsafeNotesSchema, deletesafeNotesSchema, searchsafeNotesSchema, searchsafeNotesSchemabyid } from "../controllers/safeNotesControllers";


const safeNotesRoutes = Router();

safeNotesRoutes.post('/createsafenote', schemaValidator(safeNotesSchema), validateUser, createsafeNotesSchema);
safeNotesRoutes.get('/searchsafenote', schemaValidator(safeNotesSchema), validateUser, searchsafeNotesSchema);
safeNotesRoutes.get('/searchsafenote/:id', schemaValidator(safeNotesSchema), validateUser, searchsafeNotesSchemabyid);
safeNotesRoutes.delete('/deletesafenote/:id', schemaValidator(safeNotesSchema), validateUser, deletesafeNotesSchema);

export default safeNotesRoutes;