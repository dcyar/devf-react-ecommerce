import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import ProductCount from './components/ProductCount'
import './ProductDetail.css'

const ProductDetail = () => {
  const [product, setProduct] = useState(null)
  const { pid } = useParams();

  useEffect(() => {
    fetch(`https://ecomerce-master.herokuapp.com/api/v1/item/${pid}`)
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
                <li>Marca: {product.brand}</li>
                <li className="list-data-item">Review</li>
                <li>Categoria: {product.categori}</li>
              </ul>
              <div className="product-price">
                <p className="price">US${product.price}</p>
                <span className={`price-stock ${(product.isActive ? 'green' : 'red')}`}>- in stock</span>
              </div>
              <p className="product-description">{product.description}</p>
              <ul className="product-list">
                <li>SKU: {product.sku}</li>
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
