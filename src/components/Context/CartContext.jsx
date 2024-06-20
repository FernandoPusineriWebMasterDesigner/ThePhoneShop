import { createContext, useEffect, useState } from "react";



export const CartContext = createContext(null);


export const CartContextProvider = ({ children }) => {


    const [carrito, setCarrito] = useState ([])
    const [totalItems, setTotalItems] = useState(0)
    const [precioTotal, setPrecioTotal] = useState(0)


    const addItem = (item,cantidad) => {

                const carritoCopy = [...carrito];
                const index = carritoCopy.findIndex(productos => productos.id === item.id)

                if (index != -1) {

                carritoCopy[index].cantidad = carritoCopy[index].cantidad + cantidad;
                carritoCopy[index].subtotal = carritoCopy[index].precio * carritoCopy[index].cantidad;
                setCarrito(carritoCopy);
            }

            else {
                    
                const nuevoItem = {

                    ...item,
                    cantidad,
                    subtotal: item.precio * cantidad
                }

                setCarrito([...carrito, nuevoItem])
                
            }


            const borrarItem = (id) => {

                const carritoFiler = carrito.filter(item => item.id !== id);
                setCarrito(carritoFiler)

            }

            const vaciarCarro = () => {
                setCarrito ([]
                )
            }

            const handleTotalItems = () => {
                const nuevoTotalItems = carrito.reduce((acum, item) => acum+ item.cantidad, 0);
                setTotalItems(nuevoTotalItems); 
            }

            const handlePrecioTotal = () => {
                const nuevoTotalPrecio = carrito.reduce((acum,item) => acum+ item.subtotal, 0);
                setPrecioTotal(nuevoTotalPrecio);
            }

            useEffect(() => {
                handleTotalItems();
                handlePrecioTotal();
            }, [carrito])


            const valorObjetos = {
                carrito,
                totalItems,
                precioTotal,
                addItem,
                borrarItem,
                vaciarCarro,
            }

            return <CartContext.Provider value={valorObjetos}>{children}</CartContext.Provider>









    }




}