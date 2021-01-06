import React from 'react'
import "./style.css"

const ButtonBox = ({ children, id, cycle }) => {
    return (
        <div className={id === 6 ? "button-box-yellow" : "button-box"}>
            <button className={id === 6 ? "button-box-yellow-button" : "button-box-button"} onClick={(e) => {
                e.preventDefault();
                window.location.href = `http://localhost:3000/contratar?a=add&pid=${id}&billingcycle=${cycle}&pomocode=PROMOHG40`
            }}>
                {children}
            </button>
        </div>
    )
}

export default ButtonBox