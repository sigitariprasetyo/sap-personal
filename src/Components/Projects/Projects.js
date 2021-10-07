import React from "react";
import Section from "../UnitComponents/Section";
import SectionDivider from "../UnitComponents/SectionDivider";
import SectionTitle from "../UnitComponents/SectionTiltle";
import styles from './Projects.module.css'

import { projects } from "../../pages/api/data";

const Projects = () => {
  return (
    <Section nopadding id="projects" name="projects">
      <div className={styles.menuSection}>
        <SectionDivider />
        <SectionTitle main>Projects</SectionTitle>
      </div>
      <section className={styles.gridContainer}>
        {
          projects.map((el, i) => {
            return (
              <div key={i} className={styles.blogCard}>
                <img className={styles.img} src={el.image} alt="img" />
                <div className={styles.titleContent}>
                  <h3 className={styles.h3}>{el.title}</h3>
                  <div className={styles.hr} />
                </div>
                <div className={styles.cardInfo}> {el.description}</div>
                <div>
                  <div className={styles.titleContent}>Stack</div>
                  <ul className={styles.tagList}>
                    {el.tags.map((t, i) => {
                      return <li className={styles.tag} key={i}>{t}</li>;
                    })}
                  </ul>
                </div>
                <ul className={styles.utilityList}>
                  <a className={styles.externalLink} href={el.visit}>Live</a>
                </ul>
              </div>
            )
          })
        }
      </section>
    </Section>
  )
}

export default Projects