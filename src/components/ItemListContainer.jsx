import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { ItemList } from './ItemList';
import { productos, clasificacion } from '../data/productos.json'

export const ItemListContainer = () => {

    let { categoryId } = useParams();
    let [producto, setProductos] = useState([]);
    let [titulo, setTitulo] = useState("Productos");

    const pedirProductos = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos);
            }, 1000);
        })
    }

    useEffect(() => {

        pedirProductos()

            .then((res) => {
                if (!categoryId) {
                    setTitulo("Productos");
                    setProductos(res);
                } else {
                    setTitulo(clasificacion.find((cat) => cat.id === categoryId).nombre);
                    setProductos(res.filter((prod) => prod.clasificacion === categoryId));
                }
            })
    }, [categoryId]);



    return (
        <div className='productos-contenedor'>
            <div className='productos-contenedor-titulo' >
                <h1>{titulo}</h1>
            </div>
            <ItemList producto={producto} />
        </div>
    )
}
