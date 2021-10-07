import React from "react";
import { useMediaQuery } from 'react-responsive'
import styles from './Components.module.css'

const Section = props => {
  const isBigScreen = useMediaQuery({ minWidth: 769 })
  const isMdScreen = useMediaQuery({ minWidth: 641, maxWidth: 768 })
  const isSmScreen = useMediaQuery({ maxWidth: 640 })

  return (
    <>
      {
        isBigScreen ?
          <section
            id={props.id}
            className={styles.section}
            style={{
              display: props.grid ? "grid" : "flex",
              flexDirection: props.row ? "row" : "column",
              padding: props.nopadding ? "0" : "32px 40px 0"
            }}
          >
            {props.children}
          </section> : null
      }
      {
        isMdScreen ?
          <section
            id={props.id}
            className={styles.section}
            style={{
              display: props.grid ? "grid" : "flex",
              padding: "24px 30px 0",
              flexDirection: "column"
            }}
          >
            {props.children}
          </section> : null
      }
      {
        isSmScreen ?
          <section
            id={props.id}
            className={styles.section}
            style={{
              display: props.grid ? "grid" : "flex",
              padding: props.nopadding ? "0" : "16px 16px 0",
              width: "calc(100vw - 32px)",
              flexDirection: "column"
            }}
          >
            {props.children}
          </section> : null
      }
    </>
  )
}

export default Section