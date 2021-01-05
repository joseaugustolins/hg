import React from 'react'
import { PlanItens } from '../../utils/planitens'
import ButtonBox from '../button/ButtonBox'
import './style.css'

const Box = ({ id, nome, plan, cycle }) => {


    const getValueFormated = (value) => {
        return (Math.round(value * 100) / 100).toString().replace(".", ",")
    }

    const getItens = (id) => {
        const data = PlanItens.find(element => element.id = id);
        return data.itens
    }

    return (
        
        <div className="box-default">
            <div className="box-top">
                <img width="40" height="40" src={`${process.env.REACT_APP_URL}/assets/p${id}.svg`} alt="Imagem do Plano" />
                <h3>{nome}</h3>
            </div>
            <hr className="line" />
            <div className="box-middle">
                <p>
                    <s>&#82;&#36;{getValueFormated(plan.priceOrder)}</s>
                    <b>&#82;&#36;{getValueFormated(plan.priceOrder * 60 / 100)}</b><br />
                    equivalente a
                    <div className="valorpormes">&#82;&#36; <span className="valor">{getValueFormated(plan.priceOrder * 60 / 100 / plan.months)}</span>/mês*</div>
                </p>
                <ButtonBox id={id} cycle={cycle} onClick={(e) => {
                    e.preventDefault();
                    window.location.href = `${process.env.REACT_APP_URL}/contratar?a=add&pid=${id}&billingcycle=${cycle}&pomocode=PROMOHG40`
                }}>Contrate Agora</ButtonBox>
                <br />
                <div><b>1 ano de Domínio Grátis</b></div>
                <div className="economize">economize {getValueFormated(plan.priceOrder * 40 / 100)} <span className="off40">40% OFF</span></div>
            </div>
            <hr className="line" />

            <div className="box-bottom">
                {getItens(id).map(itens => (
                    <p>
                        {itens}
                    </p>
                ))}

            </div>
        </div>

    )
}

export default Box