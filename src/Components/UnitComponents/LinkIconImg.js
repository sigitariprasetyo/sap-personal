import React from "react";
import { useMediaQuery } from 'react-responsive'

const LinkIconImg = props => {
  const isBigScreen = useMediaQuery({ minWidth: 769 })
  const isMdScreen = useMediaQuery({ minWidth: 641, maxWidth: 768 })
  const isSmScreen = useMediaQuery({ maxWidth: 640 })

  return (
    <>
      {
        isBigScreen ?
          <div
            style={{
              display: "flex",
              height: props.large ? '32px' : '24px',
            }}
          >
            {props.children}
          </div> : null
      }
      {
        isMdScreen ?
          <div
            style={{
              height: props.nav ? '16px' : '24px'
            }}
          >
            {props.children}
          </div> : null
      }
      {
        isSmScreen ?
          <div
            style={{
              height: props.large ? '32px' : '16px'
            }}
          >
            {props.children}
          </div> : null
      }
    </>
  )
}

export default LinkIconImg