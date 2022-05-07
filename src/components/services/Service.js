import React from 'react'
import Card from '../card/Card'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'

export default function Service() {
  const arr = [
    {
      title: "Web Develoment",
      img: "/images/web.png"
    },
    {
      title: "App Develoment",
      img: "/images/app.jpg"
    },
    {
      title: "Software Develoment",
      img: "/images/software.jpg"
    },
    {
      title: "Digital Marketing",
      img: "/images/digital.png"
    },
    {
      title: "Android Develoment",
      img: "/images/android.png"
    },
    {
      title: "Marketing",
      img: "/images/marketing.jpg"
    },
  ]
  return (
    <div className="container-fluid p-0">
      <Navbar id="service" />
      <h3 className='my-3 col-12 text-center'>Our Services</h3>
      <div class="row col-10 mx-auto">
        {
          arr?.map((val, idx) => <Card obj={val} />)
        }
      </div>
      <Footer/>
    </div>
  )
}
