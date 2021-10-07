import React from "react";
import styles from './Components.module.css'

const SectionDivider = props => {
  return (
    <div
      className={styles.sectionDivider}
      style={{
        background: props.colorAlt ?
          'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' :
          'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)',
        margin: props.divider ? "4rem 0" : ""
      }}
    >
      {props.children}
    </div>
  )
}

export default SectionDivider