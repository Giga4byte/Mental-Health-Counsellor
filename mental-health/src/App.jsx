import React from 'react'
import Hero from './sections/Hero'
import Navbar from './sections/Navbar'
import About from './sections/About'
import VisionMission from './sections/VisionMission'
import Team from './sections/Team'
import Features from './sections/Features'
import ContactUs from './sections/ContactUs'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <VisionMission />
      <Features />
      <Team />
      <ContactUs />
    </>
  )
}

export default App