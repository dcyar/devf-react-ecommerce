import React from 'react';
import { Button  } from "react-bootstrap";
import { useParams,useHistory } from "react-router-dom";

export default function ItemDetalle() {
    let { pid } = useParams();
    let history = useHistory();

    const productos = [
        { id: 1, nombre:"Producto 1", desc:"descripcion" },
        { id: 2, nombre:"Producto 2", desc:"descripcion" },
        { id: 3, nombre:"Producto 3", desc:"descripcion" }
    ]
    return (
        <>
            <h1> Detalle Producto</h1>
            <ul>
                <li> ID: {productos[ pid -1 ].id} </li>
                <li> Nombre: {productos[ pid -1 ].nombre} </li>
                <li> descripcion: {productos[ pid -1 ].desc} </li>
            </ul>

            <Button variant="danger" onClick={ ()=>{ 
                console.log(history);
                history.goBack();
            }}>
                Regresar a Home
            </Button>
        </>
    )
}
