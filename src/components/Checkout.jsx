import { useContext } from 'react'
import { CartContext } from './Context/CartContext'

export const Checkout = () => {

    const { carrito, calcularTotal, vaciarCarrito } = useContext(CartContext);


    return (
        <div>
            <form>
                <input type='text' placeholder='Por favor, ingrese su nombre'/>
                <input type='email' placeholder='Por favor, ingrese su em@il'/>
                <button type="submit">Comprar</button>
            </form>
        </div>
    )
}
