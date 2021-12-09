import React, { useState, useEffect } from 'react'
import ProductCount from './components/ProductCount'
import './ProductDetail.css'

const ProductDetail = ({ productId }) => {
  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetch(`https://ecomerce-master.herokuapp.com/api/v1/item/${productId}`)
      .then(response => response.json())
      .then(result => setProduct(result))
      .catch(err => console.log(err));
  }, [])

  return (
    <section className="container">
      {
        !product
          ? <p>Cargando...</p>
          : <div className="product">
            <figure className="product-figure">
              <img className="figure-image" src={product.image} alt={product.product_name} />
            </figure>
            <div className="product-detail">
              <h1 className="product-title">{product.product_name}</h1>
              <ul className="product-list-data">
                <li>Brand: {product.brand}</li>
                <li className="list-data-item">Review</li>
                <li>SKU: {product.sku}</li>
              </ul>
              <div className="product-price">
                <p className="price">US${product.price}</p>
                <span className={`price-stock ${(product.isActive ? 'green' : 'red')}`}>- in stock</span>
              </div>
              <p className="product-description">{product.description}</p>
              <ul className="product-list">
                <li>Category: {product.category}</li>
                <li>XPD: {(new Date(product.createdAt).toLocaleDateString())}</li>
              </ul>
              <ProductCount product={product} isActive={product.isActive} />
              <div className="buttons">
                <button className="btn btn-green">Iniciar sesion</button>
                <button className="btn btn-blue">Registrarse</button>
              </div>
            </div>
          </div>
      }

    </section>
  )
}

export default ProductDetail
