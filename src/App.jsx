import "./css/style.css"
import './components/header/NavBar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "./components/header/Header"
import { ItemListContainer } from "./components/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { NotFound } from "./components/NotFound";
import { Footer } from "./components/footer/Footer";
import { Carrito } from "./components/Carrito";
import { CartContext } from "./components/Context/CartContext";
import { useState } from "react"



function App() {

  
const [carrito, setCarrito] = useState([]); 
const valorCarrito = carrito.length ;

const agregarProductoAlCarrito= (producto) => {

  setCarrito ([...carrito,producto]); 
        
      
        actualizarCantidad();
        

}

const actualizarCantidad= () => {

  return carrito.length;
  

}

const vaciarCarrito= () => {

  setCarrito([]);
}

  return (
<>

<CartContext.Provider value={{agregarProductoAlCarrito, actualizarCantidad, vaciarCarrito, carrito}}>
    <BrowserRouter>
    <Header valorModificado={valorCarrito}/>
    <Routes>
      <Route path='/ThePhoneShop/' element={
        <>
        <ItemListContainer />
        </>
      }></Route>
      <Route path="/category/:categoryId" element={<ItemListContainer />}></Route>
      <Route path="/item/:itemId" element={<ItemDetailContainer/>}></Route>
      <Route path="/Carrito" element={<Carrito/>}></Route>
      <Route path="/*" element={<NotFound/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </CartContext.Provider>

    </>
  )
}

export default App
