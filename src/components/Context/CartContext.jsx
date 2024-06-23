import { createContext, useState } from 'react'
import image1 from "../../../public/images/iphone.jpg";
import image2 from "../../../public/images/s23.jpg";
import image3 from "../../../public/images/xiaomi14.jpg";
import image4 from "../../../public/images/ipad.jpg";
import image5 from "../../../public/images/tabletsamsung.jpg";
import image6 from "../../../public/images/xiaomitablet.jpg";
import image7 from "../../../public/images/applewatch.jpg";
import image8 from "../../../public/images/relojsamsung.jpg";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([]);

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


    const valorCarrito = carrito.length;

    const actualizarCantidad = () => {

        let cantidad = 0;

        if (carrito) {
            for (let i = 0; i < carrito.length; i++) {
                cantidad = carrito[i].cantidad + cantidad;
            }
        }

        return cantidad;


    }

    const vaciarCarrito = () => {

        setCarrito([]);
    }


    const agregarProductoAlCarrito = (producto) => {
        const itemIndex = carrito.findIndex(item => item.id === producto.id);
    if (itemIndex !== -1) {
        const nuevoCarrito = [...carrito];
        nuevoCarrito[itemIndex].cantidad++;
        setCarrito(nuevoCarrito);
    } else {
        producto.cantidad = 1;
        setCarrito([...carrito, producto]);
    }
};


    const calcularCantidadTotalCarrito = () => {
        return carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
}


    return (
        <CartContext.Provider value={{ carrito, images, valorCarrito, setCarrito, actualizarCantidad, calcularCantidadTotalCarrito, vaciarCarrito, agregarProductoAlCarrito }}>
            {children}
        </CartContext.Provider>
    )

}