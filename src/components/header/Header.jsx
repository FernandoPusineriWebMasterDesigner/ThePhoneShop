import React from 'react'
import { Link } from 'react-router-dom'
import { NavBar } from './NavBar'
import tituloLogo from '../../../public/images/logo.png'
import { CartWidget } from './CartWidget'

const valorModificado = 1;
export const Header = () => {

    return (
        <header className='header'>
            <div className='header-contenedor'>
                <Link to='/ThePhoneShop/' className='header-contenedor-logo'><img src={tituloLogo} className='titulo-logo' /></Link>
                <NavBar />
                <Link to={"../Carrito"}><CartWidget valor={valorModificado}/></Link>
            </div>
        </header>
    )
}
