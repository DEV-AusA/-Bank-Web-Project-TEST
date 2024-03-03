import { UserModel, VehicleModel } from "../config/data-source";
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
    createVehicleService: async(dataVehicle: VehicleDto): Promise<Vehicle> => {
        //creo el vehicle y lo guardo
        const newVehicle: Vehicle = await VehicleModel.create(dataVehicle);
        
        // aasigno el vehicle al user ingresado
        // busco al user para asignar vehicle creado
        //* FORMA 1 - usando la function getUserByIdService de
        const user = await usersServices.getUserByIdService(dataVehicle.userId);

        //* FORMA 2 - usando el UserModel con el metodo .findOneBy
        //^ findOneBy<T>(criteria: Partial<T> | ObjectLiteral): Promise<T | undefined>;
        //^  las claves representan los nombres de las columnas 
        //^ y los valores representan los valores que deseas buscar en esas columnas.
        // const user = await UserModel.findOneBy({
        //     id: dataVehicle.userId
        // })

        //* @OneToOne
        // if (user) {
        //     // asigno al user el vehiculo creado
        //     user.vehicle = newVehicle;
        //     // save del vehicle en el user y en la DB
        //     await VehicleModel.save(newVehicle);
        //     // save del vehicle en la DB
        //     await UserModel.save(user);
        // }
        //* OneToMany
        if (user) {
            newVehicle.user = user;
            await VehicleModel.save(newVehicle)
        }
        else{
            throw new Error("El usuario no existe")
        }
        return newVehicle;
    }
}