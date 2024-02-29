import { Router } from "express";
import usersRouter from "./usersRouter";

// declaro router como tipo interface gracias al modulo npm i -D @types/express
const principalRouter: Router = Router();

principalRouter.get("/")

principalRouter.use("/users", usersRouter);

export default principalRouter;
