import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import {
  ServiceItem,
  ServiceItemTitle,
  ServiceBarIcon,
  ServiceBarContainer,
} from './ServicesbarElements'
import {
  FaCode,
  FaDatabase,
  FaChartBar,
} from 'react-icons/fa'
import {
  GiMaterialsScience,
  GiGears,
} from 'react-icons/gi'
import {
  SiSwagger,
} from 'react-icons/si'
import Code from './Code'
import Databases from './Databases'
import Science from './Science'
import BI from './BI'
import Web from './Web'

export function ServicesBar () {
  return (
    <Router>
      <ServiceBarContainer>
        <ServiceItem to='/code'>
          <ServiceBarIcon>
            <FaCode />
          </ServiceBarIcon>
          <ServiceItemTitle>
            Code
          </ServiceItemTitle>
        </ServiceItem>

        <ServiceItem to='/databases'>
          <ServiceBarIcon>
            <FaDatabase />
          </ServiceBarIcon>
          <ServiceItemTitle>
            Databases & Data Engineering
          </ServiceItemTitle>
        </ServiceItem>

        <ServiceItem to='/science'>
          <ServiceBarIcon>
            <GiMaterialsScience />
          </ServiceBarIcon>
          <ServiceItemTitle>
            Data Science & Analysis
          </ServiceItemTitle>
        </ServiceItem>

        <ServiceItem to='/bi'>
          <ServiceBarIcon>
            <FaChartBar />
          </ServiceBarIcon>
          <ServiceItemTitle>
            Data Vizualisation & Business Inteligence
          </ServiceItemTitle>
        </ServiceItem>

        <ServiceItem to='/web'>
          <ServiceBarIcon>
            <SiSwagger />
          </ServiceBarIcon>
          <ServiceItemTitle>
            Web Devlopment
          </ServiceItemTitle>
        </ServiceItem>
      </ServiceBarContainer>

      <Routes>
        <Route path='/code' element={<Code />} />
        <Route path='/databases' element={<Databases />} />
        <Route path='/science' element={<Science />} />
        <Route path='/bi' element={<BI />} />
        <Route path='/web' element={<Web />} />
      </Routes>
    </Router>
  )
}
