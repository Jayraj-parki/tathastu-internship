import React from 'react'
import Common from '../common/Common'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'

export default function About() {
  return (
    <div className="container-fluid p-0">
      <Navbar id="home"/> 
      <Common
        title="Grow your business with"
        highlight="Jayraj Parki"
        desc="We are team of talented developer making website"
        img="/images/home.png"
        btn="Get Started"
        path="/service"
      />
      <Footer/>
    </div>
  )
}
