import React from 'react'
import Hero from "./Hero"
import About from "./About"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Home = () => {
  return (
    <div className='relative '>
        <Navbar />
        <Hero />
        <About />
        <Footer />
    </div>
  )
}

export default Home