import React from 'react'
import Card from '../components/Card'
import './Home.css'
import data from '../backend/Data'

const Home = () => {
 
    return (
        <div className="container-fluid">
            <p className="text-center mt-5 text-uppercase">Home Page</p>
            <div className="container py-4">
                <div className="row">

                    {data.products.map(item => {
                        return (
                            <Card img={item.img}  item={item} price={item.price} title={item.title} desc={item.desc} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home