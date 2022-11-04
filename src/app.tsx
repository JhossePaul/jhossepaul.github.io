import { Navbar } from './components/navbar'
import { ServicesBar } from './components/servicesbar'
import { Main, Section, SectionContainer, Hero } from './components/main'
import Home from './pages/home'
import About from './pages/about'
import Resume from './pages/resume'
import Portfolio from './pages/portfolio'
import Services from './pages/services'
import Contact from './pages/contact'

export function App () {
  return (
    <div className='App'>
      <Navbar />

      <Hero id='home'>
        <Home />
      </Hero>

      <Main>
        <Section id='about'>
          <SectionContainer>
            <About />
          </SectionContainer>
        </Section>

        <Section id='resume'>
          <SectionContainer>
            <Resume />
          </SectionContainer>
        </Section>

        <Section id='services'>
          <SectionContainer>
            <Services />
          </SectionContainer>
        </Section>

        <Section id='portfolio'>
          <SectionContainer>
            <Portfolio />
          </SectionContainer>
        </Section>

        <Section id='contact'>
          <SectionContainer>
            <Contact />
          </SectionContainer>
        </Section>

      </Main>
    </div>
  )
}
