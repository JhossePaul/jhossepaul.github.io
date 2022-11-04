import {
  SectionTitle, SectionContent, SectionContainer, SectionColumn, TooltipText,
  ResumeItem,
} from 'src/components/main'

export default function Resume () {
  return (
    <SectionContainer>
      <SectionTitle>
        <h2>Resume</h2>
      </SectionTitle>

      <SectionContent>

        <SectionColumn>
          <h3>Education</h3>

          <ResumeItem>
            <h4>Bachelor of Science in Biology</h4>
            <h5>2009 - 2014</h5>
            <p>Benemérita Universidad Autónoma de Puebla</p>
          </ResumeItem>
        </SectionColumn>

        <SectionColumn>
          <h3>Profesional Experience</h3>

          <ResumeItem>
            <h4>Data Optimization Manager</h4>
            <h5>2022 january - Present</h5>
            <p><em>Grupo Salinas</em></p>
            <p>Contact: <a href='https://www.linkedin.com/in/lizbeth-necoechea-hasfield-0a78277a/'>Lizbeth Necoechea</a></p>

            <TooltipText>
              <h5>What do I do?</h5>
              <p>
                I lead a team who designs Data Factories that clean, process and
                exposes data ready to be analysed.
              </p>
              <h5>How do I do it?</h5>
              <p>
                Since the amount of data on each transactional table of the bank
                magnitude is about a hundred of billion of registers. We need to
                optimize big data processes. We use Apache Spark on Scala for high
                performance distributed processes.
              </p>
              <h5>What skills I developed here?</h5>
              <p>
                Leadership, Agile Culture, Big Data, Data Engineering
              </p>
              <h5>Which technologies I mastered here?</h5>
              <p>Scala, Apache Spark, Hadoop</p>
              <h5>Key Projects</h5>
              <p>
                Data Factories for debit accounts transactional information
              </p>
            </TooltipText>
          </ResumeItem>

          <ResumeItem>
            <h4>Data Scientist Manager</h4>
            <h5>2019 march - 2022 january</h5>
            <p><em>Grupo Salinas</em></p>
            <p>Contact: <a href='https://www.linkedin.com/in/eugenio-mendoza-721659147/'>Eugenio Mendoza</a></p>

            <TooltipText>
              <h5>What did I do?</h5>
              <p>
                I lead a team to develop and operationalize data science
                products for Banco Azteca.
              </p>
              <h5>How did I do it?</h5>
              <p>
                On the data modeling, we developed advanced analytical models in
                R. On the operationalization, since most of our models were
                developed in R and we needed to operationalize R code from
                scratch, which is not an easy task. We developed an internal R
                package to fix ODBC connections to Apache Impala taking advatage
                of the HDFS CLI. Also this package helped to deploy R models
                into production.
              </p>
              <h5>What skills I developed here?</h5>
              <p>
                Hadoop, Advanced GeoSpatial Models, Customer Lifetime Value
                Models
              </p>
              <h5>Which technologies I mastered here?</h5>
              <p>
                Apache Impala, HDFS CLI
              </p>
              <h5>Key Projects</h5>
              <ul>
                <li>Banco Azteca internal R Package</li>
                <li>Customer Lifetime Value Models</li>
                <li>Kriging models to estimate credit risk zones in Mexico</li>
                <li>Predictive models to offer credit products to our debit and remittance customers</li>
                <li>Recommender systems for household products</li>
                <li>Customer segmentation based on their transactional behaviour </li>
              </ul>
            </TooltipText>
          </ResumeItem>

          <ResumeItem>
            <h4>Senior Risk Analyst</h4>
            <h5>2018 may - 2019 march</h5>
            <p><em>Hito</em></p>
            <p>Contact: <a href='https://www.linkedin.com/in/enrique-zarate-fuentes-b729001b/'>Enrique Zarate</a></p>
            <TooltipText>
              <h5>What did I do?</h5>
              <p>
                I developed a web scrapping program to get valueable information
                from the Mexican Stock Exchange (BMV). Also, I developed a package
                to validate payments in credit portfolios.
              </p>
              <h5>How did I do it?</h5>
              <p>
                I used Python to web do the web scrapping from PDF files, then I
                decrypted the PDF files with ghostscript and parsed its contents
                into a tabular file. The R package for credit portfolios was develped
                integrating C++ code with the Rcpp package for high performance under
                low resource environments.
              </p>
              <h5>What skills I developed here?</h5>
              <p>
                Escrow information management
              </p>
              <h5>Which technologies I mastered here?</h5>
              <p>
                C++, Selenium, PhantomJS, Ghostscript
              </p>
              <h5>Key Projects</h5>
              <ul>
                <li>BMV web scrapper</li>
                <li>Credit Portfolio Validation R package</li>
              </ul>
            </TooltipText>
          </ResumeItem>

          <ResumeItem>
            <h4>Senior Data Scientist</h4>
            <h5>2017 october - 2018 april</h5>
            <p><em>Kantar</em></p>
            <p>Contact: <a href='https://www.linkedin.com/in/horacio-gonz%C3%A1lez-duhart-30a26446/'>Horacio Gonzalez</a></p>
            <TooltipText>
              <h5>What did I do?</h5>
              <p>
                We developed a variety of packages and dashboards for real time
                analysis and optimization for international customers like
                Unilever, British American Tobacco, Coca-Cola, and Kantar itself.
              </p>
              <h5>How did I do it?</h5>
              <p>
                We developed the full solution from scratch: backend with Flask,
                frontend with AngularJS, data analysis with R or Python.
                Everything contenerized and deployed into on-premise and cloud
                environments.
              </p>
              <h5>What skills I developed here?</h5>
              <p>
                Frontend development, Backend Development, RESTful API
                Development, Web API Client Development, R and Python code
                operationalization, Advanced R package Development. Natural
                Language Procesing, Semantic Analysis, Topic Analysis,
                Non-linear optimization methods, Time series feature extraction,
                choice models, Reactive Programming, Pure Functional Programming,
                Object Oriented Programming.
              </p>
              <h5>Which technologies I mastered here?</h5>
              <p>
                R, Flask, TypeScript, Angular, React, D3.js, CSS, Bootstrap,
                Shiny, Microsoft R Server (Microsoft Machine Learning Server),
                Microsft Azure, Git Server, Docker, Microsoft Visual Studio Team
                Services, PostgreSQL.
              </p>
              <h5>Key Projects</h5>
              <ul>
                <li>Unilever's portfolio budget optimization dashboard</li>
                <li>Real Time Topic Analysis Dashboard</li>
                <li>Kantar internal packages development and maintenance</li>
                <li>Kantar Choice Model Optimization Dashboard</li>
                <li>Real time time series characterization dashboard</li>
                <li>Kantar internal packages development and maintenance</li>
                <li>Azure Blob Client R Package</li>
              </ul>
            </TooltipText>
          </ResumeItem>

          <ResumeItem>
            <h4>Data Scientist</h4>
            <h5>2016 august - 2017 october</h5>
            <p><em>Kantar Millward Brown</em></p>
            <p>Contact: <a href='https://www.linkedin.com/in/horacio-gonz%C3%A1lez-duhart-30a26446/'>Horacio Gonzalez</a></p>
            <TooltipText>
              <h5>What did I do?</h5>
              <p>
                Marketing Data Analysis for international clients like Coca-Cola,
                British American Tobacco, Colgate, Sodimac, BBVA, Walmart
              </p>
              <h5>How did I do it?</h5>
              <p>
                In Kantar we developed one-time marketing analysis for our
                clients. Kantar provided us with the infrastructure to collect
                data and we executed the corresponding analysis on each request.
              </p>
              <h5>What skills I developed here?</h5>
              <p>
                Clustering analysis, Choice models, Hierarchical Bayesian Models,
                Dimensionality Reduction, Sampling, Natural Language Processing,
                Market Basket Models
              </p>
              <h5>Which technologies I mastered here?</h5>
              <p>
                Sawthoot Software, Python
              </p>
              <h5>Key Projects</h5>
              <ul>
                <li>Walmart Market Basket Model</li>
                <li>Kantar AdReaction Analysis</li>
              </ul>
            </TooltipText>
          </ResumeItem>

          <ResumeItem>
            <h4>Data Scientist</h4>
            <h5>Lead Data Scientist</h5>
            <p><em>Base 10 (former LatReach LLC)</em></p>
            <p>Contact: <a href='https://www.linkedin.com/in/jluisfm/'>José Luis Flores</a></p>
            <TooltipText>
              <h5>What did I do?</h5>
              <p>
                Data Analysis and Business Intelligence development for Volkswagen Group.
              </p>
              <h5>How did I do it?</h5>
              <p>
                I worked mainly for Porsche and Seat companies. For Porsche we
                developed the BI solution from scratch. Also we analyzed CRM
                telephone postservice transcripted calls for topic analysis. For
                Seat we analyzed their social media information, giving insights
                on the market share and customer interactions.
              </p>
              <h5>What skills I developed here?</h5>
              <p>
                Backend Development, Database Administration, Web Development,
                API Development, Javascript, Time Series Analysis
              </p>
              <h5>Which technologies I mastered here?</h5>
              <p>
                Javascript, PHP, R, Python, MySQL, MongoDB
              </p>
              <h5>Key Projects</h5>
              <ul>
                <li>Porsche BI Dashboard</li>
                <li>Seat Social Media Analysis</li>
              </ul>
            </TooltipText>
          </ResumeItem>

        </SectionColumn>
      </SectionContent>
    </SectionContainer>
  )
}
