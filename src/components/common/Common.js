import React from 'react'
import { NavLink } from 'react-router-dom'
import s from "./common.module.scss"
export default function Common({title,btn,desc,img,highlight,path}) {
    return (
        <div className={s.common + " row col-12 mx-auto my-5 my-md-auto"}>
            <div className="row col-10 mx-auto  my-md-auto d-flex">
                <div className="col-md-6 my-auto order-2 order-md-1 d-flex d-md-block flex-column">
                    <h2 className='col-12 col-xl-8 col-xxl-8 text-center text-md-start'>{title} <span className='col-3 col-md-12 col-lg-12'>{highlight}</span></h2>
                    <p className='col-12  text-center text-md-start'>{desc}</p>
                    <NavLink  to={path} className='col-auto  text-center text-md-start py-2 px-3  text-center'>{btn}</NavLink>
                </div>
                <div className="col-md-6 order-1 order-md-2">
                    <img className={s.image+ ' w-100'} src={img} alt="" />
                </div>
            </div>
        </div>

    )
}
