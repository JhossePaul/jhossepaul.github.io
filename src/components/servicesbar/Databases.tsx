import {
  TechIconsContainer,
  TechIcon,
  TechContent,
} from './ServicesbarElements'
import {
  SiMongodb,
  SiMysql,
  SiMicrosoftsqlserver,
  SiPostgresql,
  SiApachehive,
} from 'react-icons/si'

export default function Databases () {
  return (
    <div>

      <TechContent>
        My experience in SQL, NoSQL and Big Data databases include MongoDB,
        PostgreSQL, MySQL, SQLite, Apache Hive, Apache Impala and Microsoft SQL
        Server. Also, I can create highly complex ETL/ELT processes with Spark
        SQL and Spark Streaming for data in the order of billions of registers
      </TechContent>

      <TechIconsContainer>

        <TechIcon>
          <SiMongodb />
        </TechIcon>

        <TechIcon>
          <SiMysql />
        </TechIcon>

        <TechIcon>
          <SiApachehive />
        </TechIcon>

        <TechIcon>
          <SiPostgresql />
        </TechIcon>

        <TechIcon>
          <SiMicrosoftsqlserver />
        </TechIcon>

      </TechIconsContainer>

    </div>
  )
}
