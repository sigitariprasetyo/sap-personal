import Layout from "../Components/Layout/Layout"
import Section from "../Components/UnitComponents/Section"
import Hero from "../Components/Hero/Hero"
import BackgroundAnimation from "../Components/BackgroundAnimation/BackgroundAnimation"
import Projects from "../Components/Projects/Projects"
import Tech from "../Components/Tech/Tech"
import About from "../Components/About/About"

export default function Home() {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BackgroundAnimation />
      </Section>
      <Projects />
      <Tech />
      <About />
    </Layout>
  )
}