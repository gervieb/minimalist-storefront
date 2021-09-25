export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_ZERO_QTY = "REMOVE_ZERO_QTY";
export const INCREASE_QTY = "INCREASE_QTY";
export const DECREASE_QTY = "DECREASE_QTY";
export const CHANGE_SELECTED = "CHANGE_SELECTED";

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};

export const removeZeroQty = () => {
  return {
    type: REMOVE_ZERO_QTY,
  };
};

export const increaseQty = (id, prodId) => {
  return {
    type: INCREASE_QTY,
    payload: {
      id: id,
      prodId: prodId,
    },
  };
};

export const decreaseQty = (id, prodId) => {
  return {
    type: DECREASE_QTY,
    payload: {
      id: id,
      prodId: prodId,
    },
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
