import server from "./server";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(
    `Jarvis operativo y atento señor, escuchando mediante sus ${PORT} neuronas`
  );
});