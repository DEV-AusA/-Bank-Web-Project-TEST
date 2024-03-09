import Card from "./Card"
import styles from './CardList.module.css'

 export const CardList = () => {
    return (
        <div className={styles.container}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
 }