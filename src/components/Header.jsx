import React from 'react'
import googleImg from "./google.jpg"
import styles from "./Header.module.css"

const Header = () => {
  return (
    <div className={styles.header}>
        <img src={googleImg} alt="logo" width={70} height={50} className={styles.img}/>
        <h1 className={styles.heading}>Google keep</h1>

    </div>
  )
}

export default Header