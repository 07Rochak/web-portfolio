import './App.css'
import AboutMe from './components/AboutMe'
import ContactMe from './components/ContactMe'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Introduction from './components/Introduction'
import Preloader from './components/Preloader'
import Skills from './components/Skills'
import React, { useEffect, useState } from 'react'

function App () {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 8500)
  }, [])
  return (
    <div style={{ backgroundColor: '#0D0D0D' }}>
      {
        loading
          ? <Preloader />
          : <div className='app-css'>
            <Header />
            <Introduction />
            <AboutMe />
            <Skills />
            <Experience />
            <ContactMe />
            <Footer />
          </div>
      }
    </div>
  )
}

export default App
