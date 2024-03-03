import { Router } from "express";
import UserController from "../controllers/User.Controller";
import auth from "../middlewares/auth";

// declaro router como tipo interface gracias al modulo npm i -D @types/express
const usersRouter: Router = Router();

usersRouter.get("/", auth.auth ,UserController.getUsers);
usersRouter.get("/:id", UserController.getUserById);
usersRouter.post("/", UserController.createUser);

usersRouter.put("/");

usersRouter.delete("/", UserController.deleteUser);

export default usersRouter;