import React, { useContext } from 'react'
import { CartContext } from './Context/CartContext'
import { Link } from 'react-router-dom';




export const Carrito = () => {

    const { vaciarCarrito, carrito, setCarrito, calcularCantidadTotalCarrito } = useContext(CartContext);

    const botonVaciarCarrito = () => {
        
        vaciarCarrito()
    }

    const eliminarItem = (id) => {
        setCarrito(carrito.filter(prod => prod.id !== id));
    };
    

    return (
        <div className='carrito'>
            {carrito.map((datos, index) => <div><h4 key={index} className='carrito-item'>{datos.nombre} {datos.marca} {datos.precio} €</h4><h6 className='contenedor-carrito-visualizacion'>Cant. {datos.cantidad} {datos.nombre} Precio: {datos.precio}</h6><button className='boton-anular' onClick={ () => eliminarItem(datos.id)}>Anular</button> </div> )}
            <h3 className='total-carrito'>Total: {calcularCantidadTotalCarrito()} €</h3>
            <button className='vaciar-carrito-btn' onClick={botonVaciarCarrito}>Vaciar Carrito</button>
            <Link to="/finalizar-compra" className= "boton-finalizar">Finalizar compra</Link>
        </div>
        
    )
}
