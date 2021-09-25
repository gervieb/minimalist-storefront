import {
  ADD_TO_CART,
  INCREASE_QTY,
  DECREASE_QTY,
  CHANGE_SELECTED,
} from "../actions/cartAction";

import {
  addToCart,
  handleIncrease,
  handleDecrease,
} from "../../utils/cartUtils";

const initialState = {
  cartList: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cartList: addToCart([...state.cartList], action.payload),
      };
    }

    case INCREASE_QTY: {
      return {
        ...state,
        cartList: handleIncrease(
          [...state.cartList],
          action.payload.id,
          action.payload.prodId
        ),
      };
    }

    case DECREASE_QTY: {
      return {
        ...state,
        cartList: handleDecrease(
          [...state.cartList],
          action.payload.id,
          action.payload.prodId
        ),
      };
    }

    case CHANGE_SELECTED: {
      return {
        ...state,
        cartList: state.cartList.map((list) => {
          return {
            ...list,
            items: list.items.map((item) =>
              item.varId === action.payload.itemId
                ? {
                    ...item,
                    variants: {
                      ...item.variants,
                      [action.payload.attriName]: action.payload.attriValue,
                    },
                  }
                : item
            ),
          };
        }),
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
