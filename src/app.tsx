import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/navbar'
import { Main } from './components/main'
import Home from './pages/home'
import About from './pages/about'
import Resume from './pages/resume'
import Portfolio from './pages/portfolio'
import Services from './pages/services'
import Contact from './pages/contact'

export function App () {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/services' element={<Services />} />
          </Routes>
        </Main>
      </Router>
    </div>
  )
}
