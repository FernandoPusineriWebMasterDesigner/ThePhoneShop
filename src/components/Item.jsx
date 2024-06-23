import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import image1 from "../../public/images/iphone.jpg";
import image2 from "../../public/images/s23.jpg";
import image3 from "../../public/images/xiaomi14.jpg";
import image4 from "../../public/images/ipad.jpg";
import image5 from "../../public/images/tabletsamsung.jpg";
import image6 from "../../public/images/xiaomitablet.jpg";
import image7 from "../../public/images/applewatch.jpg";
import image8 from "../../public/images/relojsamsung.jpg";
import { CartContext } from './Context/CartContext';


export const Item = ({producto}) => {

    const {agregarProductoAlCarrito}= useContext(CartContext);

    const images = {
        1: image5,
        2: image6,
        3: image7,
        4: image8,
        5: image2,
        6: image3,
        7: image4,
        8: image1
    };

    if (!producto) {
        return null;
    }

    const { id, imagen, nombre, marca, clasificacion } = producto;

    const agregarProducto = () => {

        agregarProductoAlCarrito(producto);

    }

    return (
        <div className="producto">
            <img src={images[imagen]} alt={`Imagen de ${nombre}`} />
            <div className='producto-descripcion'>
                <h2>{nombre}</h2>
                <h3>Marca: {marca}</h3>
                <p>Categoria: {clasificacion}</p>
                <Link to={`/item/${id}`}>Ampliar [+]</Link>
                <button onClick={agregarProducto}>Agregar al Carrito</button>
            </div>
        </div>
    )
}
