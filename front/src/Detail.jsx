import styles from "./Detail.module.css"
import { useEffect, useState } from "react";

const Detail = ({ id, handleOnClose }) => {
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`https://hp-api.onrender.com/api/character/${id}`)
        .then(res => res.json())
        .then((data) => setCharacter(data[0]))
    }, [])
     
    return (
        <div className={styles.modalDetails}>
            <div className={styles.modalDetailsDiv}>
                <h2>{character?.name}</h2>
                <img src={character?.image} alt="" />
                <button className={styles.buttonDetail} onClick={handleOnClose}>cerrar</button>
            </div>
        </div>
    )
}

export default Detail