import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartSales = () => {
    const { cart } = useContext(CartContext)

    return (
        <div className="cart__sales">
            <h5>מבצעים שמומשו</h5>
            <div className="sales-used__container">
                {cart && cart.map(p => {
                    if (p.product.sale) {
                        const product = p.product
                        const repeated = Math.floor(p.amount / p.product.sale.amount)
                        const limit = product.sale.limit > 0 ? product.sale.limit : Infinity
                        return (
                            product.sale && product.sale.amount <= p.amount &&
                            <div key={product.name} className="sales-used">
                                X {repeated > limit ? limit : repeated} מבצע על {product.name}
                            </div>
                        )
                    }
                })}
            </div>

        </div>
    )
}

export default CartSales