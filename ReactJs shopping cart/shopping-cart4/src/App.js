import React, { useState, useEffect } from 'react'
import Header from './Components/Header'
import './App.css'
import Product from './Components/Product'
import Cart from './Components/Cart'
import Filters from './Components/Filters'


const App = () => {

  const [products, setProducts] = useState([])
  const [filters, setFilters] = useState([])
  const [isShowCart, setIsShowCart] = useState(false)
  const [cart, setCart] = useState([])
  const [activeCategory, setActiveCategory] = useState('All')
  const [activePrice, setActivePrice] = useState('')

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetch('https://phones-dev.herokuapp.com/api/phones')
        const products = await data.json()

        setProducts(products.data)
        setFilters(products.data)
      }
      catch (err) { }
    }

    fetchProducts()
  })


  const handleAddToCart = (product) => {
    setCart(prev => {
      const findProductInCart = prev.find(item => item.id === product.id);


      if (findProductInCart) {
        return (prev.map(item =>
          item.id === product.id ? { ...item, amount: item.amount + 1 } : item)
        )
      }
      return [...prev, { ...product, amount: 1 }]
    })

  }


  const handleRemoveFromCart = (id) => {
    setCart((prev) => {
      if (id.amount === 1) {
        return prev.filter(item => item.id !== id.id)
      }
      return prev.map(item => item.id == id.id ? { ...item, amount: item.amount - 1 } : item)

    });
  };

  return (
    <div>
      <Header cart={cart} setIsShowCart={setIsShowCart} />
      <Filters activePrice={activePrice}
        setActivePrice={setActivePrice}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        products={products}
        setFilters={setFilters}
      />
      <div className='product'>
        {
         filters.map(product => (
            <Product handleAddToCart={handleAddToCart}
              key={product.id} product={product} />
          ))
        }
      </div>
      {isShowCart && <Cart handleRemoveFromCart={handleRemoveFromCart}
        cart={cart}
        handleAddToCart={handleAddToCart}
        setIsShowCart={setIsShowCart} />}
    </div>
  )
}

export default App