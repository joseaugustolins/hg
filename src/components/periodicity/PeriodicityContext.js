import React, { createContext, useState } from 'react'

const PeriodicityContext = createContext([{}, () => { }]);


const PeriodicityContextProvider = (props) => {
    const [periodicitySelected, setPeriodicitySelected] = useState("triennially")

    return (
        <PeriodicityContext.Provider value={[periodicitySelected, setPeriodicitySelected]}>
            {props.children}
        </PeriodicityContext.Provider>
    )
}

export { PeriodicityContextProvider, PeriodicityContext }