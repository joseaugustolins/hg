import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Periodicity from '../periodicity/Periodicity'
import { PeriodicityContext } from '../periodicity/PeriodicityContext'
import Box from './Box'



import "./style.css"
const BoxList = () => {

    const productsSelecteds = [
        "product_5",
        "product_6",
        "product_335"
    ]

    useEffect(() => {
        load()
    })

    const [periodicitySelected] = useContext(PeriodicityContext)
    const [productList, setProductList] = useState([])


    const load = async () => {
        const data = await axios.get(`${process.env.REACT_APP_BACK}/prices`)
        var listaProdutos = []
        productsSelecteds.forEach(prod => {
            listaProdutos.push(data.data.shared.products[prod])
        })
        setProductList(listaProdutos);
    }


    return (
        <div>
            <div>
                <Periodicity />
            </div>
            <div className="lista">
                {productList && productList.map(product => (
                    <Box id={product.id} key={product.id} nome={product.name} plan={product.cycle[periodicitySelected]} cycle={periodicitySelected} />
                ))}
            </div>
        </div>
    )
}

export default BoxList