import React from "react";
import { useMediaQuery } from 'react-responsive'
import styles from './Components.module.css'

const LinkContainer = props => {
  const isBigScreen = useMediaQuery({ minWidth: 769 })
  const isMdScreen = useMediaQuery({ minWidth: 641, maxWidth: 768 })
  const isSmScreen = useMediaQuery({ maxWidth: 640 })

  return (
    <>
      {
        isBigScreen ?
          <div
            className={styles.linkContainer}
            style={{
              marginLeft: props.large ? '24px' : '16px'
            }}
          >
            {props.children}
          </div> : null
      }
      {
        isMdScreen ?
          <div
            className={styles.linkContainer}
            style={{
              marginLeft: props.large ? '16px' : '8px'
            }}
          >
            {props.children}
          </div> : null
      }
      {
        isSmScreen ?
          <div
            className={styles.linkContainer}
            style={{
              marginLeft: props.large ? '0' : '8px'
            }}
          >
            {props.children}
          </div> : null
      }
    </>
  )
}

export default LinkContainer