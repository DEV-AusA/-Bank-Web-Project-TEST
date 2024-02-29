//& OPCION 1
// export const createUser = async () => {}

import { Request, Response } from "express";
import usersServices from "../services/usersServices";
import IUser from "../interfaces/IUser";

// export const getUsers = async () => {}

// export const putUser = async () => {}

// export const deleteUser = async () => {}

//& OPCION 2
export default {
    createUser: async(req: Request, res: Response) => {
        const { name, email, active } = req.body;
        const newUser: IUser = await usersServices.createUserService({name, email, active});
        res.status(201).json(newUser)

    },
    getUsers: async(req: Request, res: Response) => {
        const users: IUser[] = await  usersServices.getUsersService();
        res.status(200).json(users)
    },
    putUser: async() => {
        
    },
    deleteUser: async(req: Request, res: Response) => {
        const { id } = req.body;
        await usersServices.deleteUserService(id);
        res.status(200).json({
            message: `el Usuario fue borrado con exito`
        });
    },
}