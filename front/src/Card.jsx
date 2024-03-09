import styles from "./Card.module.css"

const Card = (props) => {
    // destructuro de props
    const { name, house } = props.character
    return (
    <div className={styles.container}>
        <h1>{name}</h1>
        <h3>{house}</h3>
    </div>
    )
}

export default Card