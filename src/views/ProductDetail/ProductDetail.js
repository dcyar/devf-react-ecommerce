import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from "react-router-dom";
import ProductCount from './components/ProductCount'
import './ProductDetail.css'
import ProductNotFound from './components/ProductNotFound';
import { useUserContext } from '../../context/userContext';

const ProductDetail = () => {
  const { currentUser } = useUserContext()
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
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
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
                {
                  currentUser
                    ? <ProductCount product={product} isActive={product.isActive} />
                    : <div className="buttons">
                      <Link to="/login" className="btn btn-green">Iniciar sesion</Link>
                      <Link to="/registrarse" className="btn btn-blue">Registrarse</Link>
                    </div>
                }
              </div>
            </div>
          )
      }

    </section>
  )
}

export default ProductDetail
