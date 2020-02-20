export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingItem = cartItems.find(item => item.id === cartItemToAdd.id);

    if (existingItem) {
        return cartItems.map(item =>
            item.id === cartItemToAdd.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
