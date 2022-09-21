import { SectionTitle, SectionContent, SectionContainer } from 'src/components/main'

export default function About () {
  return (
    <SectionContainer>
      <SectionTitle>
        <h2>About me</h2>
      </SectionTitle>

      <SectionContent>
        <p>
          Hi, my name is Paul and I am a data scientist. I hold a Bachelor's
          degree in biology.
        </p>
        <p>
          Since my school days I am interested in mathematics and statistics.
          First, I was introduced to statistics by my studies but not much after
          I started to code. That was the point of no return. I started to code
          to solve data analitical problems. Science gave my the discipline and
          method to solve a variety of questions and coding helped me to
          materlialize the solution.
        </p>
        <p>
          I have worked in data for more than seven years by now and that helped
          me to understand the data from the development to production. My
          passion for code, scientific eductation and expertise allows me to
          provide solutions to complex tasks at any point of the data pipeline
          and understand the solutions required by the business to provide
          meaningful insights.
        </p>
        <p>
          Do you want to work together? Please keep in touch by mail.
        </p>
      </SectionContent>
    </SectionContainer>
  )
}
