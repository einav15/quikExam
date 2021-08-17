const CartReducer = (state, action) => {
    let newState = []
    switch (action.type) {
        case 'ADD_TO_CART':
            newState = [...state]
            newState.push({ product: action.item, amount: 1 })
            return newState
        case 'CHANGE_ITEM_AMOUNT':
            newState = [...state]
            newState.find(p => p.product._id === action.itemId).amount = action.amount
            return newState
        case 'CHANGE_SALE_PRICE':
            return
        case 'REMOVE_ITEM':
            newState = [...state].filter(p => p.product._id !== action.itemId)
            return newState
        case 'EMPTY_CART':
            return []
        default:
            return state
    }
}

export default CartReducer

