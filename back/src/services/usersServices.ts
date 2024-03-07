import { AppDataSource } from "../config/data-source";
import UserDto from "../dto/User.Dto";
import { User } from "../entities/User";
import UserRepository from "../repositories/User.Repositoy";
import VehicleRepository from "../repositories/Vehicle.Repository";

export default {

    // retorna una promesa que se resuelve a un IUser array
    getUsersService: async(): Promise<User[]> => {
        // FORMA 1 instancio AppDataSource y uso su metodo getRepository y le paso como parametro la entity User
        const users = await AppDataSource.getRepository(User).find({
            //* @OneToOne
            // relations: {
            //     vehicles: true
            // },
            //* OneToMany
            relations: {
                vehicles: true
            },
        });
        return users;
    },
    // retorna el user o null si no lo encuentra (x el momento)
    getUserByIdService: async(id: number): Promise<User> => {
        // FORMA 2 importando la variable creada UserRepository para reducir tipeo/codigo
        const userById = await UserRepository.findUserById(id);
        return userById;
    },
    //* agregando la interface UserDto nos aseguramos que el object ingresado cumpla con los datos necesarios apra la function
    //* y la function al ser de tipo async SIEMPRE debe retornar una promesa Promise<IUser>
    createUserService: async(userData: UserDto): Promise<User> => {
        // uso el metodo .create para crear el user
        const newUser: User = await UserRepository.create(userData);
        // guardo en la DB el user creado
        const newUserSave: User = await UserRepository.save(newUser);
        return newUserSave;
    },
    putUserService: async() => {
        
    },
    // agreggo Promise<void> para avisar que esta function no va a retornar ninguna promise
    deleteUserService: async(id: number): Promise<User> => {
        //& es necesario las transactions para el delete?
        // busco al user
        const user = await UserRepository.findUserById(id);
        // borro los vehicles del user
        await VehicleRepository.delete({ user });
        // borro al user
        await UserRepository.delete(id);
        return user
    },
}