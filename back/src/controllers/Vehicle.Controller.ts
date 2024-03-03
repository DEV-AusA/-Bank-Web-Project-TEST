import { Request, Response } from "express";
import { Vehicle } from "../entities/Vehicle";
import vehicleServices from "../services/vehicleServices";


export default {
    getVehicles: async(req: Request, res: Response) => {
        const vehicles: Vehicle[] = await vehicleServices.getVehiclesService();
        res.status(200).json(vehicles);
    },
    createVehicle: async(req: Request, res: Response) => {
        const { ...data } = req.body
        const vehicle: Vehicle = await vehicleServices.createVehicleService({...data});
        res.status(201).json({
            message: `El vehicle ${vehicle.brand} ${vehicle.model} se creó correctamente.`
        })
    }
}