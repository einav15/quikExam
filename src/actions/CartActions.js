export const changeItemAmount = (itemId, amount) => ({
    type: "CHANGE_ITEM_AMOUNT",
    itemId,
    amount
});
export const changeSalePrice = (price) => ({
    type: "CHANGE_SALE_PRICE",
    price
});

export const removeItem = (itemId) => ({
    type: "REMOVE_ITEM",
    itemId
});

export const addToCart = (item) => ({
    type: "ADD_TO_CART",
    item
});

export const emptyCart = () => ({
    type: "EMPTY_CART"
});
