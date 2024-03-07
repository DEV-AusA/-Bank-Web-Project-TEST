import { AppDataSource } from "../config/data-source";
import UserRepository from "../repositories/User.Repositoy";
import VehicleRepository from "../repositories/Vehicle.Repository";
import { preloadUsers } from "./users.Data";
import { preloadVehicles } from "./vehicles.Data";

export const preloadUsersData = async () => {
    await AppDataSource.manager.transaction(async (transactionalEntityManager) => {

        const users = await UserRepository .find();

        if(users.length) return console.log(`No se hizo precarga de datos porque ya hay ${users.length} datos cargados`);
        // create & save de preloadUsers
        for await(const user of preloadUsers) {
            const newUser = await UserRepository.create(user);
            await transactionalEntityManager.save(newUser);
        }
        console.log("Precarga de users realizada con éxito");
        
    })
}

export const preloadVehiclesData = async () => {
    // creo el queryRunner
    const queryRunner = AppDataSource.createQueryRunner();
    // lo conectamos
    await queryRunner.connect();
    // con el .map convierto el array de lementos en array de promises
    const promises = preloadVehicles.map(async (vehicle) => {
        // creo el newVehicle
        const newVehicle = await VehicleRepository.create(vehicle);
        // usando el queryRunner save del newVehicle
        await queryRunner.manager.save(newVehicle);
        // busco el user a asignar
        const user = await UserRepository.findOneBy({
            id: vehicle.userId
        });
        // si no existe
        if (!user) {
            throw new Error("Usuario inexistente")
        }
        // si existe asigno el userID al vehicle
        newVehicle.user = user;
        // save del vehicle con el userId
        queryRunner.manager.save(newVehicle);
    })
    // intentando de la transaction
    try {
        // inicia la transaccion
        await queryRunner.startTransaction();
        // devuelve una nueva promesa que se resuelve cuando todas las promesas en el array se han resuelto o se rechaza tan pronto como una de las promesas en el array se rechaza. 
        await Promise.all(promises);
        // log si se resolvio la promise anterior
        console.log("Precarga de Vehicles realizada con exito");
        // realiza una confirmación (commit) de la transacción de queryRunner
        await queryRunner.commitTransaction()  
    } catch (error) {
        console.log("Error al intentar crear los vehicles");
        // echa atras toda la transaction y vuelve a cero
        await queryRunner.rollbackTransaction();        
    }
    finally {
        console.log("Ha finalizado el intento de la precarga");
        // libera el queryRunner asociada a su transaction- venga del try o del catch
        await queryRunner.release();
    }

    // await AppDataSource.manager.transaction( async (transactionalEntityManager) => {
    //     // create & save preloadVehicles
    //     for await(const vehicle of preloadVehicles) {
    //         const newVehicle = await VehicleModel.create(vehicle);
    //         await transactionalEntityManager.save(newVehicle);
    //         //verifico si existe el user a asignar el vehicle
    //         const user = await UserModel.findOneBy({
    //             id: vehicle.userId
    //         });
    //         // si existe el user
    //         if (user) {
    //             // guardo el suer en el vehicle
    //             newVehicle.user = user;
    //             // guardo el vehicle con todos los datos
    //             transactionalEntityManager.save(newVehicle);
    //         }
    //         else{
    //             // si no existe el user corto la transaccion
    //             throw new Error(`No se puedo asignar el vehicle`);
                
    //         }            
    //     }
    //     console.log(`Precarga de Vehicles realiaza con éxito`);
    // })
}