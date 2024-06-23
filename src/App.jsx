import "./css/style.css"
import './components/header/NavBar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "./components/header/Header"
import { ItemListContainer } from "./components/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { NotFound } from "./components/NotFound";
import { Footer } from "./components/footer/Footer";
import { Carrito } from "./components/Carrito";
import { CartProvider } from "./components/Context/CartContext";
import { Celulares } from "./components/header/Celulares";
import { Tablets } from "./components/header/Tablets";
import { Accesorios } from "./components/header/Accesorios"
import { Checkout } from "./components/Checkout"



function App() {


  return (
<>

<CartProvider>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/ThePhoneShop/' element={
        <>
        <ItemListContainer />
        </>
      }></Route>
      <Route path="/category/:categoryId" element={<ItemListContainer />}></Route>
      <Route path="/item/:itemId" element={<ItemDetailContainer/>}></Route>
      <Route path="/Carrito" element={<Carrito/>}></Route>
      <Route path="/celulares" element={<Celulares />} />
      <Route path="/tablets" element={<Tablets />} />
      <Route path="/accesorios" element={<Accesorios />} />
      <Route path="/finalizar-compra" element={<Checkout/>} />
      <Route path="/*" element={<NotFound/>}></Route>
      
    </Routes>
    <Footer/>
    </BrowserRouter>
    </CartProvider>

    </>
  )
}

export default App
