import { SectionTitle, SectionContent, SectionContainer } from 'src/components/main'
import { ServicesBar } from '@/components/servicesbar'

export default function Services () {
  return (
    <SectionContainer>
      <SectionTitle>
        <h2>Services</h2>
      </SectionTitle>
      <ServicesBar />
    </SectionContainer>
  )
}
