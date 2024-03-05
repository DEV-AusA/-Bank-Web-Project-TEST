import express, { NextFunction, Request, Response } from "express"
import router from "./routers/principalRouter"
import IError from "./interfaces/IError";

const server = express();

// para convertir los datos recibidos y enviados a formato JSON
server.use(express.json());
server.use(router);
// manejo los errores y los muestra en .json x mas de que sea de tipo throw
server.use((err: IError , req: Request, res: Response, next: NextFunction) => {
    // siempre responde con 500? <= corregir a futuro
    res.status(err.code || 500).json(err);
});

export default server;