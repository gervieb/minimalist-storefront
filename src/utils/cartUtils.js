export const addToCart = (cart, item) => {
  const exist = cart.find((cartItem) => cartItem.productId === item.productId);
  return exist
    ? cart.map((cartItem) =>
        cartItem.productId === item.productId
          ? {
              ...exist,
              items: [...exist.items, item.items[0]],
            }
          : cartItem
      )
    : [...cart, { ...item }];
};

export const handleQuantity = (cartItems, id, action) => {
  return cartItems.map((list) => {
    return {
      ...list,
      items: list.items.map((item) =>
        item.varId === id
          ? action === "increase"
            ? {
                ...item,
                qty: item.qty + 1,
              }
            : {
                ...item,
                qty: item.qty > 1 ? item.qty - 1 : item.qty,
              }
          : item
      ),
    };
  });
};
