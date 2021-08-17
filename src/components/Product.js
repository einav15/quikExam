import React, { useContext, useEffect, useState } from 'react'
import { CartContext, imgUrl } from '../context/CartContext'
import { changeItemAmount, removeItem, addToCart } from '../actions/CartActions'

const Product = ({ product }) => {

    const { cart, dispatchCart } = useContext(CartContext)

    const { _id, name, price, sale, barcode, imgFile } = product

    const [repeated, setRepeated] = useState(0)


    const addOrReduceAmount = (e) => {
        let onSale = sale
        if (!onSale)
            onSale = { amount: 1, price, percent: 0 }
        const cartItem = cart.find((p) => p.product._id === _id)
        const addOrReduce = e.target.innerText
        let ret = 0
        if (cartItem) {
            ret = addOrReduce === '+' ? cartItem.amount + 1 : cartItem.amount > 0 ? cartItem.amount - 1 : 0
            setRepeated(Math.floor(ret / onSale.amount))
            if (ret === 0)
                dispatchCart(removeItem(_id))
            else
                dispatchCart(changeItemAmount(_id, ret))
        } else if (addOrReduce !== '-') {
            dispatchCart(addToCart(product))
            setRepeated(Math.floor(1 / onSale.amount))
        }
    }

    useEffect(() => {
        const item = cart.find((p) => p.product._id === _id)
        if (!item)
            setRepeated(0)
    }, [cart])



    return (
        <div className="product__container">
            <div className="product__info">
                <span>{name}</span>
                <span className="product-info__price">
                    {sale && sale.amount > 1 && sale.limit > repeated && <span className="sale-text">{`${sale.amount} במבצע!`}</span>}
                    <span className={sale && sale.amount === 1 && (sale.limit > repeated || sale.limit === 0) ? "reg-price" : ""}> ₪{price} </span>
                    {sale && sale.amount === 1 && (sale.limit > repeated || sale.limit === 0) && "₪" + (sale.price || price - price * sale.percent / 100)}
                </span>
                <span>{barcode}</span>
            </div>
            <div className="product__img-amount">
                <img src={imgUrl + imgFile + '.png'} alt="img" />
                <div className="product-amount">
                    <span onClick={addOrReduceAmount}>+</span>
                    <span className='amount'>{cart.find((p) => p.product._id === _id)?.amount || 0}</span>
                    <span className='minus' onClick={addOrReduceAmount}>-</span>
                </div>
            </div>
        </div>
    )
}

export default Product