import {
  TechIconsContainer,
  TechIcon,
  TechContent,
} from './ServicesbarElements'
import {
  SiFlask,
  SiAngular,
  SiNodedotjs,
  SiDjango,
  SiReact,
  SiHtml5,
  SiCss3,
} from 'react-icons/si'

export default function Web () {
  return (
    <div>

      <TechContent>
        As a web developer, I have experience creating RESTful APIs with Scala,
        Python and Javascript backend. On the frontend side I develop the UI/UX
        with AngularJS, Angular and React. Combined with my experience in data
        visualization, I can create complex web applications from the ground
      </TechContent>

      <TechIconsContainer>
        image.png
        <TechIcon>
          <img
            src='https://www.playframework.com/assets/images/logos/9382fa0d736c5e7f01d0b7c2726a924d-play_full_color.svg'
            alt='Play Framework'
          />
        </TechIcon>

        <TechIcon>
          <SiFlask />
        </TechIcon>

        <TechIcon>
          <SiDjango />
        </TechIcon>

        <TechIcon>
          <SiNodedotjs />
        </TechIcon>

        <TechIcon>
          <SiAngular />
        </TechIcon>

        <TechIcon>
          <SiReact />
        </TechIcon>

      </TechIconsContainer>
    </div>
  )
}
