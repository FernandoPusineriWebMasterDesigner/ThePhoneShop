import React, { useContext } from 'react'
import { CartContext } from './Context/CartContext'




export const Carrito = () => {

    const { vaciarCarrito, carrito } = useContext(CartContext);

    const botonVaciarCarrito = () => {
        
        vaciarCarrito()
    }

    return (
        <div className='carrito'>
            {carrito.map((datos) => <h4 className='carrito-item'>{datos.nombre} {datos.marca} {datos.precio} €</h4>)}
            <button className='vaciar-carrito-btn' onClick={botonVaciarCarrito}>Vaciar Carrito</button>
        </div>
        
    )
}
