import React, { useState, useContext, useEffect } from 'react';

const ShopCartContext = React.createContext();

function ShopCartProvider(props) {
  const [shopCart, setShopCart] = useState(localStorage.getItem('shopCart') ? JSON.parse(localStorage.getItem('shopCart')) : [])

  useEffect(() => {
    if (!localStorage.getItem('shopCart')) {
      localStorage.setItem('shopCart', JSON.stringify([]))
    } else {
      localStorage.setItem('shopCart', JSON.stringify(shopCart))
    }
  }, [shopCart]);

  const handleAddItemToShopCart = (payload) => {
    const hasItem = shopCart.findIndex(element => element.id === payload.id);

    if (hasItem >= 0) {
      const mod = shopCart.map(item => {
        return {
          id: item.id,
          product_name: item.product_name,
          image: item.image,
          count: item.id === payload.id ? item.count + payload.count : item.count,
          price: item.price,
          subtotal: item.price*(item.id === payload.id ? item.count + payload.count : item.count)
        }
      })
      setShopCart(mod)
    } else {
      setShopCart([...shopCart, payload])
    }
  }

  const handleRemoveItemFromShopCart = (payload) => {
    setShopCart(shopCart.filter(item => item.id !== payload))
  }

  const handleClearShopCart = () => {
    setShopCart([]);
  }

  const value = {
    shopCart,
    setShopCart,
    handleAddItemToShopCart,
    handleRemoveItemFromShopCart,
    handleClearShopCart
  };

  return <ShopCartContext.Provider value={value} {...props} />;
}

const useShopCartContext = () => {
  return useContext(ShopCartContext);
};

export { ShopCartProvider, useShopCartContext };