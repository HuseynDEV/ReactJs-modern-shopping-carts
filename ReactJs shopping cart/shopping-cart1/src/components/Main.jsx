import React from 'react'
import Products from './Products'

const Main = () => {
    return (
        <div className="main flex-80">
            <Products data={products} />
        </div>
    )
}

export default Main