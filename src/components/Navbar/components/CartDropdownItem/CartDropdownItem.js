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
      <div className='producto'>
        <div className='cartImage'>
          <img src={product.image} width='80px' alt='' />
        </div>
        <div className='cartTitle'>
          <p className='nombreProducto'>{product.product_name}</p>
          <p> <span>{product.count} x</span> ${product.price} </p>
        </div>
        <div className='cartDelete'>
          <span onClick={handleRemoveItem}>X</span>
        </div>
      </div>
    </>
  )
}

export default CartDropdownItem
