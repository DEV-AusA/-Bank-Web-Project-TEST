import './App.css'
import { CardList } from './CardList'
import styles from './App.module.css'
import Login from './views/Login/Login'
import { Register } from './views/Register/Register'
import { CustomButton } from './CustomButton'
import { useEffect, useState } from 'react'
import Card from './Card'
import View from './View'
import Online from './Online'
import ToDoList from './ToDoList'
import Detail from './Detail'

//* isregistered
function App() {

  const isRegistered = true;

  return (
    <div>
      {/* <h1>Bienvenido a mi Bank</h1> */}
      {isRegistered ? <Login/> :
       <Register/>}
    </div>
  )
}

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

//* characters API LOCAL
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

//* characters API HTTP con ventana MODAL
// function App() {
//   // esta vez es un array con objects
//   const [characters, setCharacters] = useState([]);

//   const [detail, setDetail] = useState(false);
//   const [id, setId] = useState(0);

//   const handleOnClick = (id) => {
//     setId(id);
//     setDetail(true);
//   }

//   const handleOnClose = () => {
//     setDetail(false);
//   }
  
//   // useEffect(() => {
//   //   fetch("https://hp-api.onrender.com/api/characters")
//   //     .then((res) => res.json())
//   //     .then((data) => setCharacters(data))
//   // }, [])

//   useEffect(() => {

//     const fetchData = async () => {
//       try {
//         const response = await fetch("https://hp-api.onrender.com/api/characters");
//         const data = await response.json();
//         setCharacters(data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
  
//     fetchData();
    
//   }, []); 

//   return (
//     <div>
//       {/*uso el .map para renderizar cada object del array*/}
//       {characters.map((character) => {
//           return (
//               <Card key={character.id} character = {character} handleOnClick={handleOnClick}/>
//           )
//         })
//       }
//       {detail && <Detail id={id} handleOnClose = {handleOnClose} />}
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
// const App = () => {
//   return (
//     <div>
//       <ToDoList />
//     </div>
//   )
// };

//* Ciclo de vida components Mount, Update y 
// import React from "react"

// const user = "Cesar";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       session: false,
//       info: "No se ha cargado la info"
//     }
//     console.log("Ejecutando el constructor");
//   }

//   componentDidMount() {
//     console.log("Ejecutando el componentDidMount");

//     setTimeout(() => {
//       this.setState({
//         session: true,
//         info: `Bienvenido ${user}`
//       })
//     }, 3000);
//   }

//   componentDidUpdate(){
//     console.log("Ejecutando el componente componentDidUpdate");
//   }

//   render() {
//     console.log("Ejecutando el render");
//     console.log(this.state.info);
//     return (
//       <div>
//         { this.state.session ? <h2>Estas conectado "DINOSAURIO"</h2> : <h2>Aun no has iniciado sesion "LLORAR"</h2> }
//       </div>
//     )
//   }

// }

export default App