import styles from "./Login.module.css"
import logoBank from "../../assets/logoBank.png"
import { useState } from "react";
import validate from "../../helpers/validate";

const Login = () => {

    const [userData, setUserData] = useState({
        username: '',
        password: ''
    });
    // state que controla errores de inputs
    const [errors, setErrors] = useState({
        username: "El mail es requerido",
        password: "La contraseña es requerida"
    });

    //^ handleFUNCTION() convencion a estas functions que manejan eventos 
    // esta function recibirá los cambios de los inputs ingresados
    const handleInputChange = (event) => {
        // obtengo los valores del event.target
        const { name, value } = event.target;
        // se actualiza el valor de userData
        // "name" se actualiza automaticamente y toma el name de input donde se estan ingresando datos
        //& por eso es muy importante en la etiqueta name colocar el mismo nombre  que se colocó en useState
        setUserData({
            ...userData,
            [name]: value
        })
        // con cada cambio de state envio el input ingresado a la function validate y lo valido
        // ly la function validate retorna algo
        const errors = validate(userData);
        setErrors(errors);
    }
    const handleOnSubmit = (event) => {
        event.preventDefault();
        if (Object.keys(errors).length) {
            return alert("There are errors")
        }
        alert(`Username: ${userData.username} Password: ${userData.password}`)
    }

    return (
        <div className={styles.container}>
            <div className={styles.screen}>
                <div className={styles.screen__content}>
                    <form className={styles.login} onSubmit={handleOnSubmit}>
                        <div className={styles.loginBanner}>
                            <h1>Banco</h1>
                            <img src={logoBank}/>
                        </div>
                        <div className={styles.loginBannerText}>
                            <h2>te da la bienvenida</h2>
                        </div>
                        <h2>Login</h2>
                        <div className={styles.login__field}>
                            <input type="text"
                            placeholder="Email"
                            value={userData.username}
                            name="username"
                            onChange={handleInputChange}
                            />
                            {errors.username && <p style={{color:'red'}}>{errors.username}</p>}
                        </div>
                        <div className={styles.login__field}>
                            <input type="password"
                            placeholder="Password"
                            value={userData.password}
                            name="password"
                            onChange={handleInputChange}
                            />
                            {errors.password && <p style={{color:'red'}}>{errors.password}</p>}
                        </div>
                        <button className={styles.login__submit}>
                            <span>Ingresar</span>
                        </button>
                    </form>
                </div>
                <div className={styles.screen__background}>
                    <span className={`${styles.screen__background__shape} ${styles.screen__background__shape4}`} ></span>
                    <span className={`${styles.screen__background__shape} ${styles.screen__background__shape3}`} ></span>		
                    <span className={`${styles.screen__background__shape} ${styles.screen__background__shape2}`} ></span>
                    <span className={`${styles.screen__background__shape} ${styles.screen__background__shape1}`} ></span>
                </div>
            </div>
        </div>
    );
};

export default Login