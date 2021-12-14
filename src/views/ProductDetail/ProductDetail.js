import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";
import ProductCount from './components/ProductCount'
import './ProductDetail.css'
import ProductNotFound from './components/ProductNotFound';

const ProductDetail = () => {
  const [loading, setLoading] = useState(false)
  const [product, setProduct] = useState(null)

  const { pid } = useParams();

  useEffect(() => {
    setLoading(true);

    axios.get(`${process.env.REACT_APP_API_URL}/item/${pid}`)
      .then(response => {
        setProduct(response.data)
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, [])

  return (
    <section className="container">
      {
        loading
          ? <div className="loading">
            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
          </div>
          : (!product
            ? <ProductNotFound />
            : <div className="product">
              <figure className="product-figure">
                <img className="figure-image" src={(product.image ? product.image : 'http://placehold.it/500x600')} alt={product.product_name} />
              </figure>
              <div className="product-detail">
                <h1 className="product-title">{product.product_name}</h1>
                <ul className="product-list-data">
                  <li>Marca: {product.brand}</li>
                  <li className="list-data-item">Review</li>
                  <li>Categoria: {product.category}</li>
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
          )
      }

    </section>
  )
}

export default ProductDetail
