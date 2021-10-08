export const DISPLAY_CART = "DISPLAY_CART";
export const DISPLAY_CURRENCY = "DISPLAY_CURRENCY";
export const DISPLAY_SIDEPANEL = "DISPLAY_SIDEPANEL";

export const displayCart = (bool) => {
  return {
    type: DISPLAY_CART,
    payload: bool,
  };
};

export const displayCurrency = (bool) => {
  return {
    type: DISPLAY_CURRENCY,
    payload: bool,
  };
};

export const displaySidepanel = (bool) => {
  return {
    type: DISPLAY_SIDEPANEL,
    payload: bool,
  };
};
