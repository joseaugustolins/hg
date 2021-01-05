import React, { useContext } from 'react'
import { PeriodicityContext } from './PeriodicityContext'
import './style.css'

const Periodicity = () => {

    
    
    const [periodicitySelected, setPeriodicitySelected] = useContext(PeriodicityContext)
    

    const onPlanChanged = async (e) => {
        setPeriodicitySelected(e.target.value)
    }
    

    return (
        <div className="periodicity-main">
            <div style={{padding:"15px", fontSize: "14px"}}>
                Quero pagar a cada:
            </div>
        <div className="periodicity-itens-parent">
            
            <div className="periodicity-itens" onChange={onPlanChanged}>
                <label className={periodicitySelected==="triennially"?"periodicity-radio-selected":""}><input id="triennially" readOnly value="triennially" checked={periodicitySelected==="triennially"} type="radio" name="plan"/>3 anos</label>
                <label className={periodicitySelected==="annually"?"periodicity-radio-selected":""}><input id="annually" readOnly value="annually" checked={periodicitySelected==="annually"} type="radio" name="plan"/>1 ano</label>
                <label className={periodicitySelected==="monthly"?"periodicity-radio-selected":""}><input id="monthly" readOnly value="monthly" checked={periodicitySelected==="monthly"} type="radio" name="plan"/>1 mês</label>
                
            </div>
        </div>
        </div>
    )
}

export default Periodicity