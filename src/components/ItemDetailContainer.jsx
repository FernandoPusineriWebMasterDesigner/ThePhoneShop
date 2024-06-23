import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
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
        1: image5,
        2: image6,
        3: image7,
        4: image8,
        5: image2,
        6: image3,
        7: image4,
        8: image1
    };

    let { itemId } = useParams();
    let [producto, setProducto] = useState([]);


    useEffect(() => {
        
        const docRef = doc(db, "productos", itemId);

        getDoc(docRef)
        .then(res => {
            setProducto({...res.data(), idf: res.id});
        })

    }),[itemId]

    

    const agregarProducto = () => {

        agregarProductoAlCarrito(producto);

    }


    return (
        <div className='contenedor-informacion-producto'>
            <img src={images[producto.imagen]} className='producto-imagen' />

            <div className='producto-detalle'>
                {producto ? "" : "Cargando"}
                <h1>{producto.marca}</h1>
                <h2>{producto.nombre}</h2>
                <h3>Categoria: {producto.categoria}</h3>
                <p>{producto.detalle}</p>
                <p>Precio: {producto.precio}€</p>
                <Link to='/ThePhoneShop/' >Volver a Inicio</Link>
                <button onClick={agregarProducto}>Agregar al Carrito</button>
            </div>
        </div>
    )
}
