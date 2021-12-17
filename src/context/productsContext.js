import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';

const ProductContext = React.createContext();

function ProductProvider(props) {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('')

  useEffect(() => {
    handleGetProducts()
  }, [search]);

  const handleGetProducts = () => {
    setLoading(true)
    axios.get(`${process.env.REACT_APP_API_URL}/item`)
      .then(response => {
        if (!search.length) {
          setProducts(response.data.slice(0, 20))
        } else {
          setProducts([...response.data.filter(item => {
            console.log(item.product_name.includes(search))
            return item.product_name.includes(search)
          })])
        }

        setLoading(false)
      })
      .catch(err => console.log(err))
  }

  const value = {
    products,
    search,
    setSearch,
    loading
  };

  return <ProductContext.Provider value={value} {...props} />;
}

const useProductContext = () => {
  return useContext(ProductContext);
};

export { ProductProvider, useProductContext };