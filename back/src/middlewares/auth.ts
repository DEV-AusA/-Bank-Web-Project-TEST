import { NextFunction, Request, Response } from "express";

export default {
    auth: async(req: Request, res: Response, next: NextFunction) => {
        const { token } = req.headers;
        token == 'autenticado' ? next() : res.status(400).json({message: `el token '${token}' es invalido`});        
    }
} 