import { DISPLAY_CART } from "../actions/displayAction";

const initialState = {
  isDisplayed: false,
};

const displayReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_CART: {
      return {
        ...state,
        isDisplayed: action.payload,
      };
    }

    default:
      return state;
  }
};

export default displayReducer;
