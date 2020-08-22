import React from 'react';

function Contenido(prop){
    

    return (
        <tr>
            <th scope="row">{prop.nombre}</th>
            <td>{prop.producto}</td>
            <td>{prop.cantidad}</td>
            <td>{prop.total}</td>
            <td>{prop.fecha}</td>       
        </tr>
    )
}

export default Contenido;