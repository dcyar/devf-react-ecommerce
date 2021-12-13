import React from 'react'
import { Link } from 'react-router-dom'

import './ProductCard.css'

const ProductCard = ({ product }) => {
  const backgroundImage = {
    backgroundImage: `url('${product.image ? product.image : 'http://placehold.it/500x600'}')`
  }
  return (
    <div className="product-card">
      <figure className='card-header'>
        <img src={product.image ? product.image : 'http://placehold.it/500x600'} alt="" className="card-image" />
        <span className={`card-tag card-tag-${product.isActive ? 'green' : 'red'}`}>{product.isActive ? 'Con Stock' : 'Sin Stock'}</span>
      </figure>
      <div className="card-body">
        <small className='card-category'>{product.category}</small>
        <Link to={`/productos/${product._id}`} className='card-title'>
          <h3>{product.product_name}</h3>
        </Link>
        <p className='card-description'>{product.description}</p>
        <p className='card-extra'>{product.brand}</p>
      </div>
      <div className="card-footer">
        <div className="card-price">
          <p>${product.price}</p>
          <span>${product.price + 20}</span>
        </div>
        <button className="card-action" disabled={!product.isActive}>Add To Card</button>
      </div>
    </div>
  )
}

export default ProductCard
