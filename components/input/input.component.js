import React from 'react'
import styles from "./input.module.css"

const Input = ({placeholder}) => {
    return (
        <div>
            <input placeholder={placeholder} className={styles.input}/>
            
        </div>
    )
}

export default Input
