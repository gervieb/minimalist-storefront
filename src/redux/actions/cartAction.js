export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
export const INCREASE_QTY = "INCREASE_QTY";
export const DECREASE_QTY = "DECREASE_QTY";
export const CHANGE_SELECTED = "CHANGE_SELECTED";

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};

export const increaseQty = (id) => {
  return {
    type: INCREASE_QTY,
    payload: id,
  };
};

export const decreaseQty = (id) => {
  return {
    type: DECREASE_QTY,
    payload: id,
  };
};

export const changeSelected = (name, value, id) => {
  return {
    type: CHANGE_SELECTED,
    payload: {
      attriName: name,
      attriValue: value,
      itemId: id,
    },
  };
};
