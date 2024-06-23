import React from 'react'
import { Link } from 'react-router-dom'
import tituloFooter from '../../../public/images/logo.png'

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-contenedor'>
      <Link to='/ThePhoneShop/' className='header-contenedor-footer'><img src={tituloFooter} className='titulo-footer' /></Link>
    <a href="https://github.com/FernandoPusineriWebMasterDesigner/ThePhoneShop" target="_blank">
              Hecho por <i className="fas fa-heart"></i> Fernando Pusineri WebMasterDesigner
            </a>
            </div>
    </footer>
  )
}
