import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <ul className={styles.linkList}>
        <div className={styles.linkColumn}>
          <h4 className={styles.linkTitle}>Email</h4>
          <a className={styles.linkItem} href="mailto:contact@jsmastery.com">
            sigitari111@gmail.com
          </a>
        </div>
        {/* <div className={styles.linkColumn}>
          <h4 className={styles.linkTitle}>Call</h4>
          <a className={styles.linkItem} href="tel:314-343-3432">-</a>
        </div> */}
      </ul>
      <div className={styles.socialIconsContainer}>
        <div className={styles.companyContainer}>
          <p className={styles.slogan}>"Not a master, just love to learn."</p>
        </div>
        <div className={styles.socialContainer}>
          <a className="socialIcon" href="https://github.com/sigitariprasetyo" target="_blank" rel="noreferrer">
            <AiFillGithub size="3rem" />
          </a>
          <a className="socialIcon" href="https://linkedin.com/in/sigit-ari-prasetyo-63bb82187" target="_blank" rel="noreferrer">
            <AiFillLinkedin size="3rem" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer