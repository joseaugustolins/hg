import React from 'react'
import "./style.css"
import logo from './images/hostgator-logo.svg'
const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="Logo Hostgator"/>
        </div>
    )
}

export default Header