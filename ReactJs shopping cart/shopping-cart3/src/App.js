import React, { useState } from 'react';
import './App.css';
import data from './components/data/Data'
import Header from './components/front/Header/Header';
import Rout from './components/front/Routes/Rout';
import { BrowserRouter as Router } from "react-router-dom";

function App() {

  const [cartItems, setCartItems] = useState([])

  const { productItems } = data

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find(item => item.id === product.id)
    if (ProductExist) {
      setCartItems(cartItems.map((item) => item.id === product.id ?
        { ...ProductExist, quantity: ProductExist.quantity + 1 } : item))
    }
    else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
  }

  const handleRemoveProducts = (products) => {
    const ProductExist = cartItems.find(item => item.id === products.id)
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter(item => item.id !== products.id))
    }
    else{
      setCartItems(
        cartItems.map(item=>item.id===products.id?
          {...ProductExist, quantity:ProductExist.quantity-1}:item)
      )
    }
  }

  const handleCartClearance=()=>{
    setCartItems([])
  }

  return (
    <div>
      <Router>
        <Header cartItems={cartItems} />
        <Rout productItems={productItems} handleCartClearance={handleCartClearance} handleRemoveProducts={handleRemoveProducts} cartItems={cartItems} handleAddProduct={handleAddProduct} />
      </Router>
    </div>
  );
}

export default App;
