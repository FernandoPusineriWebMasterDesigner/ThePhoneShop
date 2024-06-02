import React from 'react'
import { NavLink } from 'react-router-dom'
import {clasificacion} from "../../data/productos.json"

export const NavBar = () => {
    return (
        <nav className='nav'>
            <ul className='nav-menu'>
                <li>
                    <NavLink to="/" className='nav-link'>Inicio</NavLink>
                </li>
                {
                    clasificacion.map((categoria) => {
                        return (
                            <li key={categoria.id}>
                                <NavLink to={`/category/${categoria.id}`} className='nav-link' >{categoria.nomre}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}
