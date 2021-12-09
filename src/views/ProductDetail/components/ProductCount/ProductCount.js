import React, { useState } from 'react'
import './ProductCount.css';

const ProductCount = ({ product, isActive }) => {
  const [input, setInput] = useState(1)

  const inputHandler = ({ target }) => setInput(target.value)

  const increaseHandler = () => setInput(input + 1)
  const decreaseHandler = () => setInput(input - 1)

  return (
    <div className="product-count">
      <div>
        <button onClick={decreaseHandler} disabled={!isActive}>-</button>
        <input type="text" onChange={inputHandler} value={input} disabled={!isActive} />
        <button onClick={increaseHandler} disabled={!isActive}>+</button>
      </div>
      <button className="btn btn-orange" disabled={!isActive}>Agregar al carrito</button>
    </div>
  )
}

export default ProductCount
