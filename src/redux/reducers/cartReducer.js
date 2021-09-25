import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  INCREASE_QTY,
  DECREASE_QTY,
  CHANGE_SELECTED,
} from "../actions/cartAction";

import { addToCart, handleQuantity } from "../../utils/cartUtils";

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

    case REMOVE_FROM_CART: {
      return {
        ...state,
        cartList: state.cartList.filter((item) => item.id !== action.payload),
      };
    }

    case INCREASE_QTY: {
      return {
        ...state,
        cartList: handleQuantity(
          [...state.cartList],
          action.payload,
          "increase"
        ),
      };
    }

    case DECREASE_QTY: {
      return {
        ...state,
        cartList: handleQuantity(
          [...state.cartList],
          action.payload,
          "decrease"
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
