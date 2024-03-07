//& OPCION 1
// export const createUser = async () => {}

import { Request, Response } from "express";
import usersServices from "../services/usersServices";
import IUser from "../interfaces/IUser";
import catchAsync from "../utils/catchAsync";

const getUsers = async(req: Request, res: Response) => {
    const users: IUser[] = await  usersServices.getUsersService();
    res.status(200).json(users)
}
const getUserById = async(req: Request, res: Response) => {
    const { id } = req.params;
    // uso IUser | null , por si la function getUserByIdService retorna null
    const userById: IUser | null = await usersServices.getUserByIdService(Number(id));
    res.status(200).json(userById);
}
const createUser = async(req: Request, res: Response) => {
    const { name, email, active } = req.body;
    const newUser: IUser = await usersServices.createUserService({name, email, active});
    res.status(201).json(newUser);
}
const putUser = async() => {
    /// muy pronto
}
const deleteUser = async(req: Request, res: Response) => {
    const { id } = req.body;
    const userDel = await usersServices.deleteUserService(id);
    res.status(200).json({
        message: `el Usuario fue borrado con exito`
    });
}
export default {
    getUsers: catchAsync(getUsers),
    getUserById: catchAsync(getUserById),
    createUser: catchAsync(createUser),
    putUser: catchAsync(putUser),
    deleteUser: catchAsync(deleteUser),
}