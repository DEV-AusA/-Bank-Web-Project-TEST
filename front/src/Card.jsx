import styles from "./Card.module.css"

const Card = ({character, handleOnClick}) => {
    // destructuro de props
    const { name, house, id } = character;
    console.log(name);
    return (
    <div className={styles.container}>
        <h1>{name}</h1>
        <h3>{house}</h3>
        <button onClick={() => handleOnClick(id)} >Mas detalles</button>
    </div>
    )
}

export default Card