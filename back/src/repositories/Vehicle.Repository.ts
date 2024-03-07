import { AppDataSource } from "../config/data-source";
import { Vehicle } from "../entities/Vehicle";

const VehicleRepository = AppDataSource.getRepository(Vehicle).extend({
    //nombre la custom function classic
    findVehicleById: async function (id: number): Promise<Vehicle> {
        // uso .this para referencias las functions propias del repository
        const vehicle = await this.findOneBy({ id });
        if (vehicle) return vehicle;  // return user finded
        else throw ({
            message: `No se encontró el vehicle`,
            code: 400,
            error: "Invalid ID"
        });        
    },
});

export default VehicleRepository;