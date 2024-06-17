import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { productos } from '../data/productos.json';
import image1 from "../../public/images/iphone.jpg";
import image2 from "../../public/images/s23.jpg";
import image3 from "../../public/images/xiaomi14.jpg";
import image4 from "../../public/images/ipad.jpg";
import image5 from "../../public/images/tabletsamsung.jpg";
import image6 from "../../public/images/xiaomitablet.jpg";
import image7 from "../../public/images/applewatch.jpg";
import image8 from "../../public/images/relojsamsung.jpg";
import { CartContext } from './Context/CartContext';

export const ItemDetailContainer = () => {

    const {agregarProductoAlCarrito}= useContext(CartContext);
    

    const images = {
        1: image1,
        2: image2,
        3: image3,
        4: image4,
        5: image5,
        6: image6,
        7: image7,
        8: image8
    };

    let { itemId } = useParams();
    let [producto, setProducto] = useState([]);


    useEffect(() => {
        setProducto(productos.find((prod) => prod.id === parseInt(itemId)));
    })

    const { id, nombre, marca, clasificacion, detalle, precio } = producto;

    const agregarProducto = () => {

        agregarProductoAlCarrito(producto);

    }


    return (
        <div className='contenedor-informacion-producto'>
            <img src={images[id]} className='producto-imagen' />

            <div className='producto-detalle'>
                {producto ? "" : "Cargando"}
                <h1>{marca}</h1>
                <h2>{nombre}</h2>
                <h3>Categoria: {clasificacion}</h3>
                <p>{detalle}</p>
                <p>Precio: {precio}€</p>
                <Link to="/" >Volver</Link>
                <button onClick={agregarProducto}>Agregar al Carrito</button>
            </div>
        </div>
    )
}
