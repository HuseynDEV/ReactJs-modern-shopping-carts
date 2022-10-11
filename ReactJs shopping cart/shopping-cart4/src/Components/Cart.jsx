import React from 'react'

const Cart = ({ setIsShowCart, cart, handleAddToCart ,  handleRemoveFromCart}) => {


    const total = arr => {
        return arr.reduce((cal, item) => (
            cal += item.price * item.amount
        ), 0)
    }


    return (
        <div className='cart' onClick={() => setIsShowCart(false)}>
            <div className='cart-box' onClick={e => e.stopPropagation()}>
                <h1>Cart</h1>
                <div>
                    {cart.map(item => (
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                            <img src={item.img} style={{ width: '100px' }} alt="" />
                            <h3 style={{ margin: '0px 10px' }}>{item.name}</h3>
                           <button onClick={()=> handleRemoveFromCart(item)}>-</button>
                            <p> {item.amount} * ${item.price}</p>
                            <button onClick={()=>handleAddToCart(item)}>+</button>
                        </div>
                    ))}
                    <p>Total: {total(cart)}</p>
                </div>
            </div>
        </div>
    )
}

export default Cart