import { Router } from "express";
import VehicleController from "../controllers/Vehicle.Controller";


const vehiclesRouter: Router = Router();

vehiclesRouter.get("/", VehicleController.getVehicles);
vehiclesRouter.post("/", VehicleController.createVehicle);

export default vehiclesRouter;