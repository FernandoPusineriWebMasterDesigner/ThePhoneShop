import { useContext, useState } from 'react'
import { CartContext } from '../components/Context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../firebase/config';


export const Checkout = () => {

    const { carrito, calcularCantidadTotalCarrito, vaciarCarrito } = useContext(CartContext);
    const { register, handleSubmit } = useForm();
    let [docId, setDocId] =useState("");

    const comprar = (data) => {
        const pedidos = {
            cliente: data,
            productos: carrito,
            total: calcularCantidadTotalCarrito(),
            fecha: Timestamp.now()
        }
        console.log(pedidos)

        const pedidosRef = collection (db, "pedido");

        addDoc(pedidosRef, pedidos)
        .then((doc) => {
            setDocId(doc.id);
            vaciarCarrito();
        })
    }

    if (docId) {
        return (
            <>
                <h1 className='greeting'>The Phone Shop les agradece la confianza depositada, que disfrute de su pedido</h1>
                <p className='seguimiento-pedido'>Puede hacer el seguimiento de su pedido a través del siguente localizador: {docId}</p>
            </>
        )
    }


    return (
        <div className='formulario'>
            <form className='formulario-contenedor' onSubmit={handleSubmit(comprar)}>
                <p>Rellene los datos para poder completar su compra </p>
                <input className='primer-dato' type='text' placeholder='Por favor, ingrese su nombre 😊' {...register("nombre")}/>
                <input className='segundo-dato' type='email' placeholder='Por favor, ingrese su em@il 📩' {...register("email")}/>
                <button className='boton-comprar' type="submit">Comprar</button>
            </form>
        </div>
    )
}
