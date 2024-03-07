import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";

// esta variable invoca el AppDataSource y el metodo getRepository pasandole como parametro la entity User
const UserRepository = AppDataSource .getRepository(User).extend({
    //nombre la custom function classic
    findUserById: async function (id: number): Promise<User> {
        // uso .this para referencias las functions propias del repository
        const user = await this.createQueryBuilder("user")
                                .leftJoinAndSelect("user.vehicles", "vehicles")
                                .where("user.id = :id", { id })
                                .getOne();

        if (user) return user;  // return user finded
        else throw ({
            message: "No se encontró al usuario",
            code: 404,
            error: "Invalid ID"
        });        
    },
    // buscar user x id y retorna true o false (si existe o no)
    checkUserById: async function(id: number): Promise<boolean> {
        const user = await this.findUserById(id);
        // uso doble negacion, retorna el valor de verdad true ||  false
        return !!user
    }
})

export default UserRepository;