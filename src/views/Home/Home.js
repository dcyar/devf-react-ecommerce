import React from 'react'
import ProductCard from './components/ProductCard'
import './Home.css'
import { useProductContext } from '../../context/productsContext'
import Loading from '../../components/Loading/Loading'

const Home = () => {
  const { loading, products } = useProductContext()

  return (
    <section className='container'>
      <div className="products">
        <h2>Productos Populares</h2>
        <div className="list-products">
          {
            !loading
              ? products.map(product => <ProductCard key={product._id} product={product} />)
              : <Loading />
          }
        </div>
      </div>
    </section>
  )
}

export default Home
