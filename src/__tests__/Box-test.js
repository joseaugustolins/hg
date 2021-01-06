import React from 'react'
import {render } from "@testing-library/react";
import Box from '../components/box/Box';




it('Compare values from Boxw', () => {

    const cycle = {priceRenew: "220.66", priceOrder: "220.66", months: 12}

    render (
        <Box id={5} key={5} nome={"Anualfamente"} plan={cycle} cycle={"annually"} />
    );

    const valorTotal = parseFloat(document.getElementById("valorTotal").firstChild.nodeValue)
    const valorComDesconto = parseFloat(document.getElementById("valorComDesconto").firstChild.nodeValue)
    expect(valorTotal).toBeGreaterThan(valorComDesconto)
    
})