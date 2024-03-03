
import { DataSource } from "typeorm"
import { User } from "../entities/User"
import { Vehicle } from "../entities/Vehicle";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin04",
    database: "demo_typeorm",
    dropSchema: true, // <= esta propiedad borra toda la DB si esta activado
    synchronize: true,
    logging: ["error"],
    entities: [User, Vehicle], // <= entitites y decorators
    subscribers: [],
    migrations: [],
})

// esta variable invoca el AppDataSource y el metodo getRepository pasandole como parametro la entity User
export const UserModel = AppDataSource.getRepository(User);
export const VehicleModel = AppDataSource.getRepository(Vehicle);