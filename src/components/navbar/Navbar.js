import React,{useState} from 'react'
import { NavLink } from "react-router-dom"
import s from "./navbar.module.scss"
export default function Navbar({id}) {
    const [state,setState]=useState(id);

    return (
        <> 
            <nav className={s.navbar+" row col-10 mx-auto navbar navbar-expand-lg "}>
                <div className="container-fluid">
                    <NavLink className={s.logo+" navbar-brand"} to="/">ReactWebsite</NavLink>
                    <button className="navbar-toggler shadow" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={s.content+" collapse navbar-collapse "} id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item p-0">
                                <NavLink id={state=="home"?s.active+"":s.inactive+""} onClick={()=>setState("home")} className="nav-link active m-0 py-1" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item p-0">
                                <NavLink id={state=="service"?s.active+"":s.inactive+""}  onClick={()=>setState("service")}  className="nav-link m-0 py-1" to="/service">Services</NavLink>
                            </li>
                            <li className="nav-item p-0">
                                <NavLink id={state=="about"?s.active+"":s.inactive+""} onClick={()=>setState("about")}  className="nav-link m-0 py-1" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item p-0">
                                <NavLink id={state=="contact"?s.active+"":s.inactive+""} onClick={()=>setState("contact")}  className="nav-link m-0 py-1" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
