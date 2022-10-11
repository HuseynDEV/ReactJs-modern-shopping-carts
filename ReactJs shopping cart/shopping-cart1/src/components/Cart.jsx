import React from 'react'
import { useCart } from 'react-use-cart'

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart()
    if (isEmpty) return <h5 className="text-center">My Cart is Empty</h5>
    return (
        <div className="container-fluid py-5">
            <div className="row justify-content-center">
                <h4 className="text-center py-3">My Cart</h4>
                <div className="col-12 col-lg-8 py-4">
                    <div className="d-flex align-items-center gap-4  justify-content-center">
                        <p className='position-relative fw-bolder text-title '>Cart <span className='position-absolute translate-middle rounded-pill badge bg-danger'>{totalUniqueItems}</span></p>
                        <p className='fw-bolder text-title '> Total items<span className='position-absolute translate-middle rounded-pill badge bg-success'>{totalItems}</span> </p>
                    </div>
                    <div>
                        <table className="table table-primary table-hover m-0" style={{ textAlign: 'center' }}>
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Product Number</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>process </th>
                                </tr>
                            </thead>
                            <tbody >
                                {
                                    items.map((data, index) => {
                                        console.log(data)
                                        return (
                                            <tr key={index}>
                                                <td><img src={data.img} className="img" alt="" /></td>
                                                <td>{data.title}</td>
                                                <td>${data.price}</td>
                                                <td>Quantity: {data.quantity}</td>
                                                <td>
                                                    <button className='btn btn-outline-dark' onClick={() => updateItemQuantity(data.id, data.quantity - 1)}>-</button>
                                                    <button className='btn btn-outline-dark mx-2' onClick={() => updateItemQuantity(data.id, data.quantity +1)}>+</button>
                                                    <button className='btn btn-outline-danger ms-3' onClick={()=>removeItem(data.id)}>Remove It</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="col-auto ms-auto">
                    <h3>Total Price:${cartTotal}</h3>
                </div>
                </div>
              
            </div>
        </div>
    )
}

export default Cart