import { SectionTitle, SectionContent, SectionContainer } from 'src/components/main'

export default function Portfolio () {
  return (
    <SectionContainer>
      <SectionTitle>
        <h2>Portfolio</h2>
      </SectionTitle>

      <SectionContent>
        <ul>
          <li>
            <a href='https://github.com/JhossePaul/Portable-Analytical-Environment'>
              A analytical portable environment with R backend
            </a>
          </li>
          <li>
            <a href='https://github.com/JhossePaul/AzureClient'>
              A R package to consume Azure Blob Storage API
            </a>
          </li>
          <li>
            <a href='https://github.com/JhossePaul/ValidacionCredito'>
              A C++ package with a R interface to validate loan portfolio payments
            </a>
          </li>
        </ul>
      </SectionContent>
    </SectionContainer>
  )
}
