import './App.css'
import { CardList } from './CardList'
import styles from './App.module.css'
import { Login } from './Login'
import { Register } from './Register'
import { CustomButton } from './CustomButton'

// function App() {

//   const isRegistered = false;

//   return (
//     <div>
//       <h1>Bienvenido a mi Bank</h1>
//       {isRegistered ? <Login/> : <Register/>}
//     </div>
//   )
// }

function App() {
  let contador = 0;
  return (
    <div>
      <h1 className={styles.title}>MI primera APP</h1>
      <p>Contador: {contador}</p>
      <CustomButton>Clickeame</CustomButton>
      <CardList/>      
    </div>
  )
}

export default App
