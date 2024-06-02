import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { productos } from '../data/productos.json';
import image1 from "../images/iphone.jpg";
import image2 from "../images/s23.jpg";
import image3 from "../images/xiaomi14.jpg";
import image4 from "../images/ipad.jpg";
import image5 from "../images/tabletsamsung.jpg";
import image6 from "../images/xiaomitablet.jpg";
import image7 from "../images/applewatch.jpg";
import image8 from "../images/relojsamsung.jpg";

export const ItemDetailContainer = () => {

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

    const { id, nombre, marca, clasificacion, detalle } = producto;

    return (
        <div className='contenedor-informacion-producto'>
            <img src={images[id]} className='producto-imagen' />

            <div className='producto-detalle'>
                {producto ? "" : "Cargando"}
                <h1>{marca}</h1>
                <h2>{nombre}</h2>
                <h3>Categoria: {clasificacion}</h3>
                <p>{detalle}</p>
                <Link to="/" >Volver</Link>
            </div>
        </div>
    )
}
