import React from 'react'
import { Item } from './Item'

export const ItemList = ({ producto }) => {
    return (
        <div className="productos-grilla">
            {
                producto.length > 0 ?

                    producto.map(producto => {
                        return <Item key={producto.id} producto={producto}/>
                    })
                    : <p>Cargando productos...</p>
            }
        </div>
    )
}
