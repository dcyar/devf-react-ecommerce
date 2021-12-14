import React from 'react'
import { Link } from 'react-router-dom'

import './ProductNotFound.css'

const ProductNotFound = () => {
  return (
    <section className="not-found">
      <h2>Producto no econtrado</h2>
      <Link to="/">Regresar al Inicio</Link>
    </section>
  )
}

export default ProductNotFound
