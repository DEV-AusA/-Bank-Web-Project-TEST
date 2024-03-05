import server from "./server";
import { PORT } from "./config/envs";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source";
import { preloadUsersData, preloadVehiclesData } from "./helpers/preloadData";

//* OPCION 1
// //conecto con la DB llamando a la function AppDataSource de data-source
// AppDataSource.initialize()
// .then(res => {
//   console.log("Conexion a la base de datos realizada con exito");  
//   preloadData()
//   .then(res => {
//     server.listen(PORT, () => {
//       console.log(
//         `Jarvis operativo y atento señor, escuchando mediante sus ${PORT} millones de neuronas`
//       );
//     });
//   })
// })

//* OPCION 2
const initializeApp = async () => {
  //conecto con la DB llamando a la function AppDataSource de data-source
  await AppDataSource.initialize();
  // precarga de users
  await preloadUsersData();
  //precarga de vehicles a cada user
  await preloadVehiclesData();
  server.listen(PORT, () => {
    console.log(
      `Jarvis operativo y atento señor, escuchando mediante sus ${PORT} millones de neuronas`
    );    
  })
}
// levanto el server
initializeApp();

//* OPCION 3
// async function serverOn() {
//   try {
//     //conecto con la DB llamando a la function AppDataSource de data-source
//     await AppDataSource.initialize()
//     console.log("Conexion a la base de datos realizada con exito");
//     // precarga de users
//     await preloadUsersData();
//     //precarga de vehicles a cada user
//     await preloadVehiclesData();
//     server.listen(PORT, () => {
//       console.log(
//         `Jarvis operativo y atento señor, escuchando mediante sus ${PORT} millones de neuronas`
//       );
//     });
//   } catch (error) {
//     console.error("Error al inicializar el servidor:", error);
//   }
// }
// // levanto el server
// serverOn();


