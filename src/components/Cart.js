import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartItem from './CartItem'
import CartSales from './CartSales'

const Cart = () => {
    const { cart, dispatchCart } = useContext(CartContext)
    return (
        <div className="cart">
            <div className="cart__items">
                <div className="cart-items__list">
                    {cart && cart.map((p) => <CartItem productObj={p} dispatch={dispatchCart} key={p.product.barcode} />)}
                </div>
            </div>
            <CartSales />
        </div>
    )
}

export default Cart