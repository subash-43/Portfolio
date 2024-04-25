import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Navbar from './Components/utility/Navbar'
import Project from './Components/Project'
import Education from './Components/Education'
import Experience from './Components/Experience'
import Contact from './Components/Contact'
import Footer from './Components/utility/Footer'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      <About />
      <Project />
      <Education />
      <Experience />
      <Contact />
      <Footer/>
    </div>
  )
}
