import React from "react";
import { DiFirebase, DiReact } from 'react-icons/di';
import { SiMocha } from 'react-icons/si';
import Section from "../UnitComponents/Section";
import SectionDivider from "../UnitComponents/SectionDivider";
import SectionText from "../UnitComponents/SectionText";
import SectionTitle from "../UnitComponents/SectionTiltle";
import styles from './Tech.module.css'

const Tech = () => {
  return (
    <Section id="tech">
      <div className={styles.menuSection}>
        <SectionDivider divider />
        <SectionTitle>Technologies</SectionTitle>
        <SectionText>
          I've worked with a range a technologies in the web development world.
          From Back-end To Front-end.
        </SectionText>
      </div>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <picture>
            <DiReact size="3rem" />
          </picture>
          <div className={styles.listContainer}>
            <h4 className={styles.listTitle}>Front-End</h4>
            <p className={styles.listParagraph}>
              Experiece with <br />
              React.js with Next.js, Redux, context
            </p>
          </div>
        </li>
        <li className={styles.listItem}>
          <picture>
            <DiFirebase size="3rem" />
          </picture>
          <div className={styles.listContainer}>
            <h4 className={styles.listTitle}>Back-End</h4>
            <p className={styles.listParagraph}>
              Experiece with <br />
              Express.js, Adonisjs, JWT, Postgresql
            </p>
          </div>
        </li>
        <li className={styles.listItem}>
          <picture>
            <SiMocha size="3rem" />
          </picture>
          <div className={styles.listContainer}>
            <h4 className={styles.listTitle}>Others</h4>
            <p className={styles.listParagraph}>
              GCP, AWS, Mocha & Chai, Grafana, Deck.gl with Google Maps
            </p>
          </div>
        </li>
      </ul>
      <div className={styles.menuSection} style={{ marginTop: 50 }}>
        <SectionDivider colorAlt />
      </div>
    </Section>
  )
}

export default Tech
