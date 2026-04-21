import React from 'react'
import Hero from '../components/Hero'
import Pricing from './Pricing'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Pricing/>
        <Projects/>
        <About/>
        <Contact/>
    </div>
  )
}

export default Home