import { Router } from "express";
import usersRouter from "./usersRouter";
import vehiclesRouter from "./vehiclesRouter";

// declaro router como tipo interface gracias al modulo npm i -D @types/express
const principalRouter: Router = Router();

principalRouter.get("/")

principalRouter.use("/users", usersRouter);

principalRouter.use("/vehicles", vehiclesRouter);

export default principalRouter;
