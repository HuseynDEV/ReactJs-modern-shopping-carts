import React from 'react'
import './cart.css'

const Cart = ({ cartItems, handleAddProduct, handleRemoveProducts,handleCartClearance }) => {

  const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0)


  return (
    <div className='cart-items'>
      <div className="cart-items-header">Cart Items</div>
      <div className="clear-cart">
        {
          cartItems.length>=1 &&(
            <button className='clear-cart-button' onClick={()=>handleCartClearance()}>Clear Cart</button>
          )
        }
      </div>

      {
        cartItems.length === 0 && <div className="cart-items-empty">No items are empty.</div>
      }
      <div>
        {
          cartItems.map(item => (
            <div key={item.id} className="cart-items-list">
              <img
                src={item.image}
                className="cart-items-image"
                alt="" />
              <div className="cart-items-name">{item.name}</div>
              <div className="cart-items-function">
                <button className="cart-items-add"
                  onClick={() => handleAddProduct(item)}>+</button>
                <button className='cart-items-remove'
                  onClick={() => handleRemoveProducts(item)}>-</button>
              </div>
              <div className="cart-items-price">
                {item.quantity}*${item.price}
              </div>
            </div>
          ))
        }
      </div>
      <div className="cart-items-total-price-name">
        Total price
        <div className="cart-items-total-price">${totalPrice}</div>
      </div>
    </div>
  )
}

export default Cart