import { Request, Response } from "express";
import { Vehicle } from "../entities/Vehicle";
import vehicleServices from "../services/vehicleServices";
import catchAsync from "../utils/catchAsync";


const getVehicles = async(req: Request, res: Response) => {
    const vehicles: Vehicle[] = await vehicleServices.getVehiclesService();
    res.status(200).json(vehicles);
}

const createVehicle = async(req: Request, res: Response) => {
    const { ...data } = req.body
    const vehicle: Vehicle | void = await vehicleServices.createVehicleService({...data});
    res.status(201).json({
        message: `El vehicle ${vehicle?.brand} ${vehicle?.model} se creó correctamente.`
    })
}

export default {
    // aplico la function de orden superior y recibe el controller
    getVehicles: catchAsync(getVehicles),
    createVehicle: catchAsync(createVehicle),
}