import React from 'react'
import { useShopCartContext } from '../../../../context/cartContext'
import './CartDropdownItem.css'

const CartDropdownItem = ({ product }) => {
  const { handleRemoveItemFromShopCart } = useShopCartContext()
  const handleRemoveItem = () => {
    handleRemoveItemFromShopCart(product.id)
  }
  return (
    <div className='product-item'>
      <span>{product.count}</span>
      <h5>{product.product_name}</h5>
      <span onClick={handleRemoveItem}>X</span>
    </div>
  )
}

export default CartDropdownItem
