import "./css/style.css"
import './components/header/NavBar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "./components/header/Header"
import { ItemListContainer } from "./components/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { NotFound } from "./components/NotFound";
import { Footer } from "./components/footer/Footer";



function App() {
  
const valorCarrito = 1 ;

  return (
    <BrowserRouter>
    <Header valorModificado={valorCarrito}/>
    <Routes>
      <Route path="/" element={
        <>
        <ItemListContainer />
        </>
      }></Route>
      <Route path="/category/:categoryId" element={<ItemListContainer />}></Route>
      <Route path="/item/:itemId" element={<ItemDetailContainer/>}></Route>
      <Route path="/*" element={<NotFound/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
