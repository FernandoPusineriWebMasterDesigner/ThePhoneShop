import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { ItemList } from './ItemList';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

export const ItemListContainer = () => {

    let { categoryId } = useParams();
    let [producto, setProductos] = useState([]);
    let [titulo, setTitulo] = useState("Productos");



    useEffect(() => {

        const productosRef = collection(db, "productos");
        const q = categoryId ? query(productosRef, where("clasificacion.id", "==", categoryId)) : productosRef;

        const categoriasRef = collection(db, "categoria");
        const catQuery = categoryId && query(categoriasRef, where("id", "==", categoryId));


        getDocs(q)
            .then((res) => {
                setProductos(
                    res.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    })
                )

            })

        if (catQuery) {
            getDocs(catQuery)
                .then((res) => {
                    setTitulo(res.docs[0].data().nombre);
                })

        } else {
            setTitulo("Productos");
        }

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
