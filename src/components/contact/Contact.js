import React, { useRef } from 'react'
import Navbar from "../navbar/Navbar"
import s from "./contact.module.scss"
import Footer from '../footer/Footer'
export default function Contact() {
  const name = useRef();
  const email = useRef();
  const phone = useRef();
  const msg = useRef();
  const submitForm = () => {
    const obj = {
      name: name.current.value,
      email: email.current.value,
      phone: phone.current.value,
      msg: msg.current.value,
    }
    alert(`My name is ${obj.name}. My Mobile number is ${obj.phone} and email is ${obj.email}. Here is what i want to say ${obj.msg}`)
  }
  return (
    <div className={s.contact + " container-fluid p-0"}>
      <Navbar id="contact" />
      <div className='col-10 col-sm-8 col-md-6 col-xl-4 mx-auto'>
        <h2 className="mt-3 mb-5 col-12 text-center">Contact Us</h2>
        <div className="mb-3">
          <label for="exampleInputname1" className="form-label"> Full Name</label>
          <input required type="text" ref={name} className="form-control" id="exampleInputnamel1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input required type="email" ref={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label for="exampleInputPhone" className="form-label">Phone</label>
          <input required type="Number" ref={phone} className="form-control" id="exampleInputPhone" />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">Message</label>
          <textarea className="form-control" ref={msg} id="exampleFormControlTextarea1" rows="3" placeholder='write message here...'></textarea>
        </div>
        <button type="submit" className={s.button+ " px-3 py-2"} onClick={submitForm}>Submit Form</button>
      </div>
      <Footer/>
    </div>
  )
}
