import React, { useContext } from 'react'
import { CartContext } from './Context/CartContext'



export const Carrito = () => {

    const { vaciarCarrito, carrito } = useContext(CartContext);

    const botonVaciarCarrito = () => {
        
        vaciarCarrito()
    }

    return (
        <div>
            {carrito.map((datos) => <h4>{datos.nombre} {datos.marca} {datos.precio} €</h4>)}
            <button onClick={botonVaciarCarrito}>Vaciar Carrito</button>
        </div>
        
    )
}
