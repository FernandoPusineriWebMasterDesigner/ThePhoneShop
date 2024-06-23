import React, { useContext } from 'react'
import { CartContext } from './Context/CartContext'
import { Link } from 'react-router-dom';




export const Carrito = () => {

    const { vaciarCarrito, carrito } = useContext(CartContext);

    const botonVaciarCarrito = () => {
        
        vaciarCarrito()
    }

    const total = carrito.reduce((acc, producto) => acc + producto.precio, 0);

    return (
        <div className='carrito'>
            {carrito.map((datos, index) => <h4 key={index} className='carrito-item'>{datos.nombre} {datos.marca} {datos.precio} €</h4>)}
            <h3 className='total-carrito'>Total: {total} €</h3>
            <button className='vaciar-carrito-btn' onClick={botonVaciarCarrito}>Vaciar Carrito</button>
            <Link to="/finalizar-compra">Finalizar compra</Link>
        </div>
        
    )
}
