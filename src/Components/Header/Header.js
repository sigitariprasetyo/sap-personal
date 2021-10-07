import React from "react";
import Link from 'next/link'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.div1}>
        <Link href="/">
          <a style={{ display: 'flex', alignItems: 'center', color: "white", fontSize: '2rem' }}>
            {/* <DiCssdeck size="4rem" /> <span>S.01000001.P</span> */}
            <img src="./favicon.png" className={styles.logo} /> <span>S.01000001.P</span>
          </a>
        </Link>
      </div>
      <div className={styles.div2}>
        <li>
          <Link href="#projects">
            <a className={styles.navLink}>Projects</a>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <a className={styles.navLink}>Technologies</a>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <a className={styles.navLink}>About</a>
          </Link>
        </li>
      </div>
      <div className={styles.div3}>
        <a className="socialIcon" href="https://github.com/sigitariprasetyo" target="_blank" rel="noreferrer">
          <AiFillGithub size="3rem" />
        </a>
        <a className="socialIcon" href="https://linkedin.com/in/sigit-ari-prasetyo-63bb82187" target="_blank" rel="noreferrer">
          <AiFillLinkedin size="3rem" />
        </a>
      </div>
    </div>
  )
}

export default Header