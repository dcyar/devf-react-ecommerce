import React from 'react';
import withProtection from '../../utils/withProtection';

 const CrearProducto = () => {
    return (
        <div>
            <h1>Formulario de Crar Producto...</h1>
        </div>
    )
}

export default withProtection(CrearProducto, "ADMIN");