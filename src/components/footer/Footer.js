import React from 'react'
import s from "./footer.module.scss"
export default function() {
    return (
        <div className={s.footer+ ' bg-secondary py-2'}>
            <p className="p-0 m-0 mx-auto text-center bg-secondary text-light">
                &copy; 2022 Jayraj Parki All Rights Reserved | Terms and Conditions
            </p>
        </div>
    )
}
