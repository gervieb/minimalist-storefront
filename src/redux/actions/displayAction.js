export const DISPLAY_CART = "DISPLAY_CART";

export const displayCart = (bool) => {
  return {
    type: DISPLAY_CART,
    payload: bool,
  };
};
