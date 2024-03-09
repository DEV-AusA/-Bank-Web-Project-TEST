import './App.css'
import { CardList } from './CardList'
import styles from './App.module.css'
import { Login } from './Login'
import { Register } from './Register'
import { CustomButton } from './CustomButton'
import { useState } from 'react'
import Card from './Card'
import View from './View'
import Online from './Online'
import ToDoList from './ToDoList'

//* isregistered
// function App() {

//   const isRegistered = false;

//   return (
//     <div>
//       <h1>Bienvenido a mi Bank</h1>
//       {isRegistered ? <Login/> : <Register/>}
//     </div>
//   )
// }

//*changeName
// function App() {
//   const [name, setName] = useState("Cesar");

//   const changeName = ()=> {    
//     name === "Cesar" ? setName("Nico") : setName("Cesar");
//   }
//   return (
//     <div>
//       <h1>Hola soy {name}</h1>
//       <CustomButton onClick={changeName}>cambiame</CustomButton>
//     </div>
//   );  
// };

//* contador
// function App() {
//   // ESTADO hook useState
//   let [contador, setContador] = useState(0);

//   const incrementar = () => {
//     setContador(contador+=1)
//   }

//   return (
//     <div>
//       <h1 className={styles.title}>MI primera APP</h1>
//       <p>Contador: {contador}</p>
//       <CustomButton onClick={incrementar}>Clickeame</CustomButton>
//       <CardList/>      
//     </div>
//   )
// }

//* characters
// function App() {
//   // esta vez es un array con objects
//   const [characters, setCharacters] = useState([
//     {id: 1, name: "Hary Potter", house: "Gryffindor"},
//     {id: 2, name: "Draco Malfoy", house: "Slytherin"}
//   ]);
//   // function para setCharacters
//   const addCharacter = ()=> {
//     setCharacters( [...characters, {id: 3, name: "Cesar Ausa", house: "Manquitus"}])
//   }
//   const modifyName = () => {
//     characters[0].name = "Harry Potter";
//     // indico un cambio de estado para que se actualize el array
//     setCharacters([...characters, ])
//   }
//   return (
//     <div>
//       {/*uso el .map para renderizar cada object del array*/}
//       {characters.map((character) => {
//           return ( 
//           <Card key={character.id} character = {character}/>
//           )
//         })
//       }
//       {/* agrego el evento al button */}
//       <button onClick={addCharacter}>Agregar personaje</button>
//       <button onClick={modifyName}>cambiar nombre</button>
//     </div>
//   );  
// };

//* Evento hijo a padre
// const App = () => {
//   return (
//     <div>
//       <View />
//     </div>
//   )
// };

//* Mostrando estado en distintos componentes
// const App = () => {
//   return (
//     <div>
//       <Online />
//     </div>
//   )
// };

//* ToDos List
const App = () => {
  return (
    <div>
      <ToDoList />
    </div>
  )
};

export default App
