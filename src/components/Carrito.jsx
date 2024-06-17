import React, { useContext } from 'react'
import { CartContext } from './Context/CartContext'



export const Carrito = () => {

    const { vaciarCarrito } = useContext(CartContext);

    const botonVaciarCarrito = () => {
        
        vaciarCarrito()
    }

    return (
        <button onClick={botonVaciarCarrito}>Vaciar Carrito</button>
    )
}
