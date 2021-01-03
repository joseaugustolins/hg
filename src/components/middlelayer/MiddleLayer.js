import React from 'react'
import imgLeft from './images/imgleft.svg'
import imgRight from './images/imgright.svg'
import seta from './images/seta.svg'
import './style.css'
const MiddleLayer = () => {
    return (
        <div>
        <div className="principal">
            <div className="left-side">
                <img src={imgLeft} alt="Armário com cafeteira"/>
            </div>
            <div className="center-part">
                <h2>Hospedagem de Sites</h2>
                <h1>Tenha uma hospedagem de sites estável e evite perder visitantes diariamente</h1>
                <h3>
                    &#10003; 99,9% de disponibilidade: seu site sempre no ar
                    &#10003; Suporte 24h, todos os dias
                    &#10003; Painel de controle cPanel
                </h3>
            </div>
            <div className="right-side">
            <img src={imgRight} alt="Profissional de TI em fente ao notebook"/>
            </div>
        </div>
        <div className="seta">
                <img src={seta} alt="Seta para baixo"/>
        </div>
        </div>
    )
}

export default MiddleLayer