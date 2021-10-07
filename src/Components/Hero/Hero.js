import React from 'react';
import Button from '../UnitComponents/Button';
import Section from '../UnitComponents/Section';
import SectionText from '../UnitComponents/SectionText';
import SectionTitle from '../UnitComponents/SectionTiltle';
import styles from './Hero.module.css'

const Hero = (props) => (
  <>
    <Section row nopadding>
      <div className={styles.leftSection}>
        <SectionText>Hello,</SectionText>
        <SectionTitle>
          I'm Sigit Ari Prasetyo
        </SectionTitle>
        <SectionText>
          I'm a Fullstack Developer who's knowledgeable in the JavaScript programming language.<br />
          Welcome to my personal website, I'm glad you're here...
        </SectionText>
        <form method="get" action="/pdf/Resume_Sigit_Ari_Prasetyo.pdf" target="_blank">
          <Button type="submit">See My Resume</Button>
        </form>
      </div>
    </Section>
  </>
);

export default Hero;