import styles from "./Card.module.css"

export const Card = () => {
    return (
    <div className={styles.container}>
        <h1>Card</h1>
        <h3>Nombre: Cesar</h3>
        <p>Email: cesar@gmail.com</p>
    </div>
    )
}