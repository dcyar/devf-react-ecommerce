import React from 'react'
import { useShopCartContext } from '../../../../context/cartContext'
import './CartDropdownItem.css'

const CartDropdownItem = ({ product }) => {
  const { handleRemoveItemFromShopCart } = useShopCartContext()
  const handleRemoveItem = () => {
    handleRemoveItemFromShopCart(product.id)
  }
  return (
    <>
      {/*<ul className='listaCarrito'>*/}
        {/*<li>*/}
          <div className='producto'>
            <div className='cartImage'>
              <img src={product.image} width='80px' />
            </div>
            <div className='cartTitle'>
              <p className='nombreProducto'>{product.product_name}</p>
              <p> <span>{product.count} x</span> ${product.price} </p>
            </div>
            <div className='cartDelete'>
              <span onClick={handleRemoveItem}>X</span>
            </div>
          </div>
        {/*</li>*/}
      {/*</ul>*/}
      {/*<div className='product-item'>
        <span>{product.count}</span>
        <h5>{product.product_name}</h5>
        <span>{product.price}</span>
        <span onClick={handleRemoveItem}>X</span>
      </div>*/}
    </>
  )
}

export default CartDropdownItem
