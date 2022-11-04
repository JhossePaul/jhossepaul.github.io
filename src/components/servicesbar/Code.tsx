import {
  TechIconsContainer,
  TechIcon,
  TechContent,
} from './ServicesbarElements'
import {
  SiScala,
  SiPython,
  SiR,
  SiJavascript,
  SiGnubash,
  SiTypescript,
  SiCplusplus,
} from 'react-icons/si'

export default function Code () {
  return (
    <div>

      <TechContent>
        Something I do really enjoy is writing code. I am always eager to learn
        a new programming language. I am fluent in Bash, Scala, Python, R and
        JavaScript. I can adjust to almost any development environment. Other
        languages I used before include PHP, .NET and C++
      </TechContent>

      <TechIconsContainer>

        <TechIcon>
          <SiGnubash />
        </TechIcon>

        <TechIcon>
          <SiScala />
        </TechIcon>

        <TechIcon>
          <SiPython />
        </TechIcon>

        <TechIcon>
          <SiR />
        </TechIcon>

        <TechIcon>
          <SiJavascript />
        </TechIcon>

        <TechIcon>
          <SiTypescript />
        </TechIcon>

        <TechIcon>
          <SiCplusplus />
        </TechIcon>

      </TechIconsContainer>
    </div>
  )
}
