import { AppDataSource, UserModel, VehicleModel } from "../config/data-source";
import VehicleDto from "../dto/Vehicle.Dto";
import { Vehicle } from "../entities/Vehicle";
import usersServices from "./usersServices";

export default {
    getVehiclesService: async(): Promise<Vehicle[]> => {
        // establesco la relation @ManyToOne con user
        const vehicles: Vehicle[] = await VehicleModel.find({
            relations: {
                user: true
            }
        });
        return vehicles;

    },
    createVehicleService: async(dataVehicle: VehicleDto): Promise<Vehicle | void> => {
        // creo el queryRunner
        const queryRunner = AppDataSource.createQueryRunner()
        // lo conectamos
        queryRunner.connect();

        try {
            // inicio la transaction
            queryRunner.startTransaction();
            //creo el vehicle y lo guardo
            const newVehicle: Vehicle = await VehicleModel.create(dataVehicle);
            // aasigno el vehicle al user ingresado
            // busco al user para asignar vehicle creado
            const user = await usersServices.getUserByIdService(dataVehicle.userId);
            if (!user) throw ({ message: "error no se encontro el user", code: 804, error: "Not found"}); // <= si no existe
            // si existe asigno el userId al vehicle
            newVehicle.user = user;
            // guardo los cambios en el vehicle
            await queryRunner.manager.save(newVehicle);
            // libero la transaction
            await queryRunner.commitTransaction()
            // el vehicle creado
            return newVehicle;

        } catch (error) {
            // si no se completó la transaccion devuelvo todo hacia atras
            await queryRunner.rollbackTransaction();
            throw error
        }
        finally{
            await queryRunner.release();
        }
        
        


    }
}