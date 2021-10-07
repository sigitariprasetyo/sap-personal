import React from "react";
import { useMediaQuery } from 'react-responsive'
import styles from './Components.module.css'

const ButtonFront = props => {
  const isBigScreen = useMediaQuery({ minWidth: 769 })
  const isMdScreen = useMediaQuery({ minWidth: 641, maxWidth: 768 })
  const isSmScreen = useMediaQuery({ maxWidth: 640 })

  return (
    <>
      {
        isBigScreen ?
          <button
            className={styles.buttonFront}
            style={{
              fontSize: props.alt ? '20px' : '24px',
              boxShadow: props.disabled ? 'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)' : 'none',
              background: props.alt ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' : 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)',
              opacity: props.disabled ? '.5' : '1',
            }}
          >
            {props.children}
          </button> : null
      }

      {
        isMdScreen ?
          <button
            className={styles.buttonFront}
            style={{
              fontSize: props.alt ? '20px' : '16px',
              boxShadow: props.disabled ? 'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)' : 'none',
              background: props.alt ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' : 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)',
              opacity: props.disabled ? '.5' : '1',
            }}
          >
            {props.children}
          </button> : null
      }

      {
        isSmScreen ?
          <button
            className={styles.buttonFront}
            style={{
              fontSize: 14,
              boxShadow: props.disabled ? 'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)' : 'none',
              background: props.alt ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' : 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)',
              opacity: props.disabled ? '.5' : '1',
            }}
          >
            {props.children}
          </button> : null
      }
    </>
  )
}

export default ButtonFront