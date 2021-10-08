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

export const handleDecrease = (cartItems, id, prodId) => {
  const quantity = cartItems
    .find((list) => list.productId === prodId)
    .items.find((item) => item.varId === id).qty;

  if (quantity === 1) {
    const res = cartItems.find((list) => list.productId === prodId);

    if (res.items.length === 1)
      return cartItems.filter((list) => list.productId !== prodId);

    return cartItems.map((list) => {
      return {
        ...list,
        items: list.items.filter((item) => item.varId !== id),
      };
    });
  }

  return cartItems.map((list) => {
    return {
      ...list,
      items: list.items.map((item) =>
        item.varId === id
          ? {
              ...item,
              qty: item.qty - 1,
            }
          : item
      ),
    };
  });
};

export const handleIncrease = (cartItems, id, prodId) => {
  return cartItems.map((list) => {
    return {
      ...list,
      items: list.items.map((item) =>
        item.varId === id
          ? {
              ...item,
              qty: item.qty + 1,
            }
          : item
      ),
    };
  });
};
