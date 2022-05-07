import React from 'react'
import s from "./card.module.scss"
export default function Card({obj}) {
    return (
        <div className={s.card+ " col-md-6 col-xl-4 mb-3"}>
            <div className="card">
                <img src={obj?.img} className="card-img-top w-100" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{obj?.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button  className={s.button+ " px-3 py-2"}>Check Now</button>
                </div>
            </div>
        </div>
    )
}
