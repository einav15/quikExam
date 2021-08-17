import React, { useEffect, useState } from 'react'
import Product from './Product'

const ProductList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('call-V2.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => setProducts(res.data.sort((p1, p2) => {
                if (p1.sale)
                    return -1
                if (p2.sale)
                    return 1
                return 0
            })))
    }, [])

    return (
        <div className="products">
            <div className="products__list">
                {products && products.map(p => <Product key={p._id} product={p} />)}
            </div>

        </div>
    )
}

export default ProductList