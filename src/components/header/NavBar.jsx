import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';

export const NavBar = () => {

    let [categories, setCategories] = useState([]);

    useEffect(() => {
        const categoriasRef = collection(db, "categoria");
        getDocs(categoriasRef)
            .then((res) => {
                setCategories(res.docs.map((doc) => {
                    return { ...doc.data() }
                }));
            })



    }, [])

    return (
        <nav className='nav'>
            <ul className='nav-menu'>
                <li>
                    <NavLink to='/ThePhoneShop/' className='nav-link'>Inicio</NavLink>
                </li>
                {
                    categories.map((categoria) => (
                        <li key={categoria.id}>
                            <NavLink to={`/category/${categoria.id}`} className='nav-link'>{categoria.nombre}</NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
};
