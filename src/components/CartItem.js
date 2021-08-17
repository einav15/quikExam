import React, { useMemo } from 'react'
import { removeItem } from '../actions/CartActions'
import { imgUrl } from '../context/CartContext'

const CartItem = ({ productObj, dispatch }) => {
    const { product, amount } = productObj
    const { _id, price, sale, imgFile } = product

    const calcPrice = (amountIn) => {
        if (sale) {
            const discounted = sale.price ? sale.price : (price - price * sale.percent / 100)
            const limit = sale.limit > 0 ? sale.limit : Infinity
            if (sale.amount === 1) {
                if (amountIn <= limit)
                    return discounted * amountIn
                return discounted * limit + price * (amountIn - limit)
            }
            if (sale.amount <= amountIn) {
                if (amountIn % sale.amount === 0) {
                    if (amountIn / sale.amount <= limit)
                        return discounted * amountIn / sale.amount
                    return discounted * limit + price * (amountIn - limit * sale.amount)
                }
                if (amountIn / sale.amount <= limit)
                    return discounted * Math.floor(amountIn / sale.amount) + price * (amountIn - sale.amount * Math.floor(amountIn / sale.amount))
                const inSaleLimit = sale.amount * limit
                return discounted * limit + price * (amountIn - inSaleLimit)
            }

        }
        return price * amountIn
    }

    const itemPrice = useMemo(() => calcPrice(amount), [amount])

    const removeFromCart = () => {
        dispatch(removeItem(_id))
    }

    return (
        <div className="cart__product-container">
            <img src={imgUrl + imgFile + '.png'} alt="img" />
            <span>  ₪{(Math.round(itemPrice * 100) / 100).toFixed(2)} </span>
            <span onClick={removeFromCart} className="remove-item">x</span>
        </div>
    )
}

export default CartItem