import React from 'react'
import styles from "./button.module.css"

const Button = ({title}) => {
    return (
        <div>
            <button className={styles.button}>{title}</button>
        </div>
    )
}

export default Button
