import React from 'react'
import { Link } from 'react-router-dom'
import { NavBar } from './NavBar'
import tituloLogo from '../../images/logo.png'
import { Carrito } from './Carrito'

const valorModificado = 1;
export const Header = () => {

    return (
        <header className='header'>
            <div className='header-contenedor'>
                <Link to="/" className='header-contenedor-logo'><img src={tituloLogo} className='titulo-logo' /></Link>
                <NavBar />
                <Carrito valor={valorModificado}/>
            </div>
        </header>
    )
}
