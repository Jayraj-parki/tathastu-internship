import React from 'react'
import Home from './components/home/Home'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import s from "./app.module.scss"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import About from './components/about/About'
import Service from './components/services/Service'
import Contact from './components/contact/Contact'

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={"/"} exact element={<Home />} />
          <Route path={"/about"} exact element={<About />} />
          <Route path={"/service"} exact element={<Service />} />
          <Route path={"/contact"} exact element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}
