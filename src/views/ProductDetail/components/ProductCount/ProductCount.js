import React, { useState } from 'react'
import { useShopCartContext } from '../../../../context/cartContext';
import './ProductCount.css';

const ProductCount = ({ product, isActive }) => {
  const { handleAddItemToShopCart } = useShopCartContext()
  const [input, setInput] = useState(1)

  const inputHandler = ({ target }) => setInput(target.value)

  const increaseHandler = () => setInput(input + 1)
  const decreaseHandler = () => setInput(input !== 1 ? (input - 1) : 1)

  const handleAddProductToShopCart = () => {
    handleAddItemToShopCart({
      id: product._id,
      product_name: product.product_name,
      image: product.image ? product.image : 'http://placehold.it/500x600',
      price: product.price,
      count: input
    })
  }

  return (
    <div className="product-count">
      <div>
        <button onClick={decreaseHandler} disabled={!isActive}>-</button>
        <input type="text" onChange={inputHandler} value={input} disabled={!isActive} readOnly />
        <button onClick={increaseHandler} disabled={!isActive}>+</button>
      </div>
      <button className="btn btn-orange" onClick={handleAddProductToShopCart} disabled={!isActive}>Agregar al carrito</button>
    </div>
  )
}

export default ProductCount
