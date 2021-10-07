import React from "react";
import styles from './Components.module.css'

const SectionText = props => {
  return (
    <p className={styles.sectionText}>
      {props.children}
    </p>
  )
}

export default SectionText