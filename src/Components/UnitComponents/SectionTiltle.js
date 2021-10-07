import React from "react";
import { useMediaQuery } from 'react-responsive'
import styles from './Components.module.css'

const SectionTitle = props => {
  const isBigScreen = useMediaQuery({ minWidth: 769 })
  const isMdScreen = useMediaQuery({ minWidth: 641, maxWidth: 768 })
  const isSmScreen = useMediaQuery({ maxWidth: 640 })

  return (
    <>
      {
        isBigScreen ?
          <h2
            className={styles.sectionTitle}
            style={{
              fontSize: props.main ? '65px' : '56px',
              lineHeight: props.main ? '72px' : '56px',
              padding: props.main ? '58px 0 16px' : '0'
            }}
          >
            {props.children}
          </h2> : null
      }

      {
        isMdScreen ?
          <h2
            className={styles.sectionTitle}
            style={{
              fontSize: props.main ? '56px' : '48px',
              lineHeight: props.main ? '56px' : '48px',
              padding: props.main ? '40px 0 12px' : '0',
              marginBottom: 12
            }}
          >
            {props.children}
          </h2> : null
      }

      {
        isSmScreen ?
          <h2
            className={styles.sectionTitle}
            style={{
              fontSize: props.main ? '28px' : '32px',
              lineHeight: props.main ? '32px' : '40px',
              padding: props.main ? '16px 0 8px' : '0',
              marginBottom: 8,
              maxWidth: "100%"
            }}
          >
            {props.children}
          </h2> : null
      }
    </>
  )
}

export default SectionTitle