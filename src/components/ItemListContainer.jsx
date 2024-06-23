import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { ItemList } from './ItemList';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export const ItemListContainer = () => {

    let { categoryId } = useParams();
    let [producto, setProductos] = useState([]);
    let [titulo, setTitulo] = useState("Productos");



    useEffect(() => {

        const productosRef = collection(db, "productos");

        getDocs(productosRef)
                    .then((res) => {
            setProductos(
                res.docs.map((doc) => {
                    return {...doc.data(), id: doc.id}
                })
            )
            
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
