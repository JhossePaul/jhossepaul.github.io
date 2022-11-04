import {
  TechIconsContainer,
  TechIcon,
  TechContent,
} from './ServicesbarElements'
import {
  SiTableau,
  SiD3Dotjs,
} from 'react-icons/si'

export default function Code () {
  return (
    <div>
      <TechContent>
        Data visualization is an art by itself. The basic principles for data
        vizualisation try to decrease data complexity into simple charts to
        favor useful information from our data. I can creatte this
        visualizations from scratch using D3.js, quick and clean plots with
        ggplot2 or seaborn, fast responsive sites with Shiny, and for corporate
        infrastructure using Tableau
      </TechContent>

      <TechIconsContainer>

        <TechIcon>
          <SiTableau />
        </TechIcon>

        <TechIcon>
          <SiD3Dotjs />
        </TechIcon>

        <TechIcon>
          <svg height='1em' width='1em'>
            <image xlinkHref='https://seaborn.pydata.org/_images/logo-mark-lightbg.svg' height='1em' width='1em' />
          </svg>
        </TechIcon>

        <TechIcon>
          <img src='https://ggplot2.tidyverse.org/logo.png' alt='ggplot2' />
        </TechIcon>

        <TechIcon>
          <img src='https://shiny.rstudio.com/py/api/_static/shiny-logo.png' alt='Shiny' />
        </TechIcon>

      </TechIconsContainer>
    </div>
  )
}
