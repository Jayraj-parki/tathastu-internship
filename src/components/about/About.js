import React from 'react'
import Common from '../common/Common'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'

export default function About() {
  return (
    <div className="container-fluid p-0">
        <Navbar id="about"/>
        <Common
         title="Welcome to About Page"
         highlight="Jayraj Parki"
         desc="We are team of talented developer making website"
        img="/images/home.png"
        btn="Contact Here"
        path="/contact"
        
        />
        <Footer/>
    </div>
  )
}
