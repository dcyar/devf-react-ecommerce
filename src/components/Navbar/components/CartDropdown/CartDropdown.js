import React from 'react'
import { useShopCartContext } from '../../../../context/cartContext';
import CartDropdownItem from '../CartDropdownItem';

import './CartDropdown.css'

const CartDropdown = () => {
  const { shopCart, handleClearShopCart } = useShopCartContext();
  let total = 0;
  for (let i = 0; i < shopCart.length; i++) {
    total += shopCart[i].subtotal;
  }

  return (
    <div className="dropdown-cart">
      {
        shopCart.length
          ? <>
            {
              shopCart.map(product => <CartDropdownItem key={product.id} product={product} />)
            }
            <div className='total'>
              <p>Total</p>
              <p>${total}</p>
            </div>
            <p className='botonCarrito' onClick={() => handleClearShopCart()}>Vaciar Carrito</p>
          </>
          : <span className='empty-cart'>El carrito esta vacio</span>
      }
    </div >
  )
}

export default CartDropdown
