import { NextFunction, Request, Response } from "express";

// Definir el tipo de la función controller  <= sugerencia chatgpt
type ControllerFunction = (req: Request, res: Response) => Promise<void>;

// function de orden superior que recibe el controller y si tiene un error lo envia al manejador de errores de express
const catchAsync = (controller: ControllerFunction) => {
    return (req: Request, res: Response, next: NextFunction) => {
        controller(req, res).catch((err) => next(err));
        // controller(req, res).catch((err) => res.status(err.code).json(err.message));
    };
}; 

export default catchAsync;