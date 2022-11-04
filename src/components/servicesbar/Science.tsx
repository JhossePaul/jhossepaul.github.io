import {
  TechIconsContainer,
  TechIcon,
  TechContent,
} from './ServicesbarElements'
import {
  SiPandas,
  SiScikitlearn,
  SiR,
  SiTensorflow,
} from 'react-icons/si'
import {
  DiSpark,
} from 'react-icons/di'

export default function Science () {
  return (
    <div>

      <TechContent>
        My data analysis portfolio includes: marketing analysis like choice
        models, geographical data analysis, topic and sentiment analysis, driver
        analysis; financial data analysis such as budget optimization, client
        segmentation, time series analysis and forecast, recommender systems,
        customer lifetime value and other more technical buzz words. With this
        tools I can provide useful insights for my clients
      </TechContent>

      <TechIconsContainer>

        <TechIcon>
          <SiR />
        </TechIcon>

        <TechIcon>
          <SiPandas />
        </TechIcon>

        <TechIcon>
          <SiScikitlearn />
        </TechIcon>

        <TechIcon>
          <DiSpark />
        </TechIcon>

        <TechIcon>
          <SiTensorflow />
        </TechIcon>

      </TechIconsContainer>
    </div>

  )
}
