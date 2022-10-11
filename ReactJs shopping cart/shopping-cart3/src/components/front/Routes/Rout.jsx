import React from 'react'
import {
  Routes,
  Route
} from "react-router-dom";
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import Signup from '../Signup/Signup';

const Rout = ({ productItems, cartItems, handleAddProduct,handleRemoveProducts,handleCartClearance }) => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Products productItems={productItems} handleAddProduct={handleAddProduct}  />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/cart' element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProducts={handleRemoveProducts} handleCartClearance={handleCartClearance} />} />
      </Routes>
    </div>
  )
}

export default Rout