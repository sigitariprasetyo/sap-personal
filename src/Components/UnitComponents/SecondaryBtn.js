import React from "react";
import styles from './Components.module.css'

const SecondaryBtn = props => {
  return (
    <button className={styles.secondaryBtn}>
      {props.children}
    </button>
  )
}

export default SecondaryBtn