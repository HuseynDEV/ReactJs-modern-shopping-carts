import React, { useEffect } from 'react'

const Filters = ({
    activeCategory,
    setActiveCategory,
    activePrice,
    setActivePrice,
    products,
    setFilters
}) => {



    const categories = [
        {
            id: 1,
            name: "All"
        },
        {
            id: 2,
            name: 'Phone'
        },
        {
            id: 3,
            name: "Laptop"
        },
        {
            id: 4,
            name: 'Watch'
        }
    ]

    const prices = [
        {
            id: 1,
            name: 'Less than 1000',
            value: 'lt1000'
        },
        {
            id: 2,
            name: 'From 1000 to 1500',
            value: 'btw10001500'
        },
        {
            id: 3,
            name: 'Greater than 1500',
            value: 'gt1500'
        },
        {
            id: 4,
            name: 'Clear Filters',
            value: 'clear'
        }
    ]

    useEffect(() => {
       

        const filterCategory = products.filter(item => activeCategory == 'All' ? item : item.category === activeCategory)

        const filterPrice = filterCategory.filter((item) =>
        {
            if (activePrice === '') {
                return item
            }
            else if (activePrice === "Less than 1000") {
                return item.price < 1000
            }
            else if (activePrice === "From 1000 to 1500") {
                return item.price >= 1000 && item.price <= 1500
            }
            else{
                return item.price>1500
            }
        }

        );

        setFilters(filterPrice)
    }, [activeCategory, activePrice, products, setFilters]);



    return (
        <div>
            <div>
                {categories.map(item => (
                    <button onClick={() => setActiveCategory(item.name)}
                        className={activeCategory === item.name ? 'active-btn category-btn' : 'category-btn'} >{item.name}</button>
                ))}
            </div>
            <div>
                {
                    prices.map(item => (
                        <button onClick={() => item.value !== 'clear' ? setActivePrice(item.name) : setActivePrice('')}
                            className={activePrice === item.name ? 'active-btn category-btn' : 'category-btn'}>{item.name}</button>
                    ))
                }
            </div>
        </div>
    )
}

export default Filters