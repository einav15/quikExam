import React from 'react'
import Cart from './components/Cart'
import Header from './components/Header'
import ProductList from './components/ProductList'
import CartContextProvider from './context/CartContext'

const App = () => {
    return (
        <CartContextProvider>
            <Header />
            <ProductList />
            <Cart />
        </CartContextProvider>
    )
}

export default App