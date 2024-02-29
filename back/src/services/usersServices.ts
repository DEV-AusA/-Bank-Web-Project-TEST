import UserDto from "../dto/User.Dto";
import IUser from "../interfaces/IUser"

// temporal hasta usar datos de una DB
let users: IUser[] = [
    {
        id: 1,
        name: "Cesar",
        email: "cesar@gmail.com",
        active: true,
    }
];
// uso id temporal
let id: number = 2

export default {

    //* agregando la interface UserDto nos aseguramos que el object ingresado cumpla con los datos necesarios apra la function
    //* y la function al ser de tipo async SIEMPRE debe retornar una promesa Promise<IUser>
    createUserService: async(userData: UserDto): Promise<IUser> => {
        const newUser: IUser = {
            id,
            name: userData.name,
            email: userData.email,
            active: userData.active,
        }
        // pusheo al array temporal
        users.push(newUser);
        id++;
        return newUser
    },
    // retorna una promesa que se resuelve a un IUser array
    getUsersService: async(): Promise<IUser[]> => {
        return users;
    },
    putUserService: async() => {
        
    },
    // agreggo Promise<void> para avisar que esta function no va a retornar ninguna promise
    deleteUserService: async(id: number): Promise<void> => {
        // el filter crea un nuevo array que contiene todos los usuarios del array original users, excepto el que coincide con el id proporcionado.
        users = users.filter((user: IUser) => {
            return user.id !== id   
        });        
    },
}