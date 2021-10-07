import React from "react";
import { useMediaQuery } from 'react-responsive'
import styles from './Components.module.css'

const ButtonBack = props => {
  const isBigScreen = useMediaQuery({ minWidth: 769 })
  const isMdScreen = useMediaQuery({ minWidth: 641, maxWidth: 768 })
  const isSmScreen = useMediaQuery({ maxWidth: 640 })

  return (
    <>
      {
        isBigScreen ?
          <button
            className={styles.buttonBack}
            style={{
              width: props.alt ? '150px' : '262px',
              height: props.alt ? '52px' : '64px',
              fontSize: props.alt ? '20px' : '24px',
              margin: props.alt || props.form ? '0' : '0 0 80px',
              background: props.alt ? 'linear-gradient(270deg, #ff622e 0%, #B133FF 100%)' : 'linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)',
              opacity: props.disabled ? '.5' : '1',
            }}
          >
            {props.children}
          </button> : null
      }

      {
        isMdScreen ?
          <button
            className={styles.buttonBack}
            style={{
              width: props.alt ? '150px' : '184px',
              height: props.alt ? '52px' : '48px',
              fontSize: props.alt ? '20px' : '16px',
              margin: props.alt || props.form ? '0' : '0 0 80px',
              marginBottom: props.alt ? '0' : '64px',
              background: props.alt ? 'linear-gradient(270deg, #ff622e 0%, #B133FF 100%)' : 'linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)',
              opacity: props.disabled ? '.5' : '1',
            }}
          >
            {props.children}
          </button> : null
      }

      {
        isSmScreen ?
          <button
            className={styles.buttonBack}
            style={{
              width: "100%",
              height: 32,
              fontSize: 14,
              margin: props.alt || props.form ? '0' : '0 0 80px',
              marginBottom: props.alt ? '0' : '32px',
              background: props.alt ? 'linear-gradient(270deg, #ff622e 0%, #B133FF 100%)' : 'linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)',
              opacity: props.disabled ? '.5' : '1',
            }}
          >
            {props.children}
          </button> : null
      }
    </>
  )
}

export default ButtonBack