import React from 'react'
import Home from './pages/Home'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Cart from './components/Cart'
import { CartProvider,useCart  } from 'react-use-cart'

const App = () => {
  return (
    <div>
      <CartProvider>
        <Home />
        <Cart />
      </CartProvider>
    </div>
  )
}

export default App