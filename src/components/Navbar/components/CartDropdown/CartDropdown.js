import React from 'react'
import { useShopCartContext } from '../../../../context/cartContext';
import CartDropdownItem from '../CartDropdownItem';

import './CartDropdown.css'

const CartDropdown = () => {
  const { shopCart, handleClearShopCart } = useShopCartContext();

  return (
    <div className="dropdown-cart">
      {
        shopCart.length
          ? <>
            {
              shopCart.map(product => <CartDropdownItem key={product.id} product={product} />)
            }
            <p onClick={() => handleClearShopCart()}>Vaciar Carrito</p>
          </>
          : <span className='empty-cart'>El carrito esta vacio</span>
      }
    </div >
  )
}

export default CartDropdown
