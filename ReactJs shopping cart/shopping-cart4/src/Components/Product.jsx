import React from 'react'

const Product = ({ product, handleAddToCart }) => {
    return (
        <div className='product-item'>
            <div className='product-img'>
                <img src={product.img} alt="" />
            </div>
            <h3 >{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Buy now</button>
        </div>
    )
}

export default Product