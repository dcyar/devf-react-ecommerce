import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from './components/ProductCard'
import './Home.css'

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('https://ecomerce-master.herokuapp.com/api/v1/item')
      .then(response => setProducts(response.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <section className='container-fluid'>
      {/* <div className='hero'>
        <div className="hero-item hero-item-1">1</div>
        <div className="hero-item hero-item-2">2</div>
        <div className="hero-item hero-item-3">3</div>
        <div className="hero-item hero-item-4">4</div>
      </div> */}
      <div className="products">
        <h2>Productos Populares</h2>
        <div className="list-products">
          {
            products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Home
