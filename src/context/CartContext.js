import React, { useReducer } from 'react'
import CartReducer from '../reducers/CartReducer'
export const CartContext = React.createContext()
export const imgUrl = "https://images.bringbring.com/qa/assets/imgs/products/"

const CartContextProvider = (props) => {

    const [cart, dispatchCart] = useReducer(CartReducer, [])

    return (
        <CartContext.Provider value={{
            cart, dispatchCart
        }}>
            {props.children}
        </CartContext.Provider>
    )

}

export default CartContextProvider