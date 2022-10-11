import React from 'react'
import { BiPhoneCall } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';


const Header = ({ setIsShowCart, cart }) => {
    return (
        <div className='navbar'>
            <img src="https://github.com/dtvi2412/Phone-E-Commerce-ReactJS/blob/master/src/Assets/img/logoS.png?raw=true" alt="" />
            <div className='header_about'>
                <div className='call'>
                    <BiPhoneCall />
                    <div>
                        <p>Call to buy</p>
                        <p>199090900</p>
                    </div>
                </div>
                <div className='shopping_cart' onClick={() => setIsShowCart(true)}>
                    <AiOutlineShoppingCart style={{ fontSize: '30px' }} />
                    {
                        cart.length > 0 && <span>{cart.length}</span>
                    }
                </div>
            </div>

        </div>
    )
}

export default Header