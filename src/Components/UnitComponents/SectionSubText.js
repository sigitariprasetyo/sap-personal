import React from "react";
import styles from './Components.module.css'

const SectionSubText = props => {
  return (
    <p className={styles.sectionSubText}>
      {props.children}
    </p>
  )
}

export default SectionSubText