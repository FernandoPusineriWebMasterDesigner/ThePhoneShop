import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { CartContext } from '../components/Context/CartContext';

export const ItemDetailContainer = () => {

    const { agregarProductoAlCarrito, images } = useContext(CartContext);




    let { itemId } = useParams();
    let [producto, setProducto] = useState([]);


    useEffect(() => {

        const docRef = doc(db, "productos", itemId);

        getDoc(docRef)
            .then(res => {
                setProducto({ ...res.data(), idf: res.id });
            })

    }), [itemId]



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
