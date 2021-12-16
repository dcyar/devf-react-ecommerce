import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from './components/ProductCard'
import './Home.css'

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/item`)
      .then(response => setProducts(response.data.slice(0, 10)))
      .catch(err => console.log(err))
  }, [])

  return (
    <section className='container'>
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
