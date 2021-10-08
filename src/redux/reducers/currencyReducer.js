import { CHANGE_CURRENCY, SAVE_CURRENCIES } from "../actions/currencyAction";

const initialState = {
  currencies: [],
  currentCurrency: "",
};

const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY: {
      return {
        ...state,
        currentCurrency: action.payload,
      };
    }

    case SAVE_CURRENCIES: {
      return {
        ...state,
        currencies: action.payload,
        currentCurrency: action.payload[0],
      };
    }

    default:
      return state;
  }
};

export default currencyReducer;
