import express, {json} from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/index";
import errorHandler from "./middlewares/errorHandler";
import "express-async-errors"


dotenv.config()

const server = express();

server.use(cors(), json());

server.use(router);
server.use(errorHandler);

const PORT = Number(process.env.PORT) || 5000;

server.listen(PORT, ()=>console.log(`Server running successfully at PORT ${PORT}.`))