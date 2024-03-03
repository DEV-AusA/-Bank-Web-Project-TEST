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
    getUsers: async(req: Request, res: Response) => {
        const users: IUser[] = await  usersServices.getUsersService();
        res.status(200).json(users)
    },
    getUserById: async(req: Request, res: Response) => {
        const { id } = req.params;
        // uso IUser | null , por si la function getUserByIdService retorna null
        const userById: IUser | null = await usersServices.getUserByIdService(Number(id));
        res.status(200).json(userById);
    },
    createUser: async(req: Request, res: Response) => {
        const { name, email, active } = req.body;
        const newUser: IUser = await usersServices.createUserService({name, email, active});
        res.status(201).json(newUser);
    },
    putUser: async() => {
        
    },
    deleteUser: async(req: Request, res: Response) => {
        const { id } = req.body;
        const userDel = await usersServices.deleteUserService(id);
        res.status(200).json({
            message: `el Usuario fue borrado con exito`
        });
    },
}