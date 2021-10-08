import {
  DISPLAY_CART,
  DISPLAY_CURRENCY,
  DISPLAY_SIDEPANEL,
} from "../actions/displayAction";

const initialState = {
  isCartDisplayed: false,
  isCurrDisplayed: false,
  isSidepanelDisplayed: false,
};

const displayReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_CART: {
      return {
        ...state,
        isCartDisplayed: action.payload,
      };
    }

    case DISPLAY_CURRENCY: {
      return {
        ...state,
        isCurrDisplayed: action.payload,
      };
    }

    case DISPLAY_SIDEPANEL: {
      return {
        ...state,
        isSidepanelDisplayed: action.payload,
      };
    }

    default:
      return state;
  }
};

export default displayReducer;
