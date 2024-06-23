import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../components/Context/CartContext';


export const Item = ({producto}) => {

    const {agregarProductoAlCarrito, images}= useContext(CartContext);

    

    if (!producto) {
        return null;
    }


    const agregarProducto = () => {

        agregarProductoAlCarrito(producto);

    }

    return (
        <div className="producto">
            <img src={images[producto.imagen]} alt={`Imagen de ${producto.nombre}`} />
            <div className='producto-descripcion'>
                <h2>{producto.nombre}</h2>
                <h3>Marca: {producto.marca}</h3>
                <p>Categoria: {producto.clasificacion.nombre}</p>
                <Link to={`/item/${producto.id}`}>Ampliar [+]</Link>
                <button onClick={agregarProducto}>Agregar al Carrito</button>
            </div>
        </div>
    )
}
