import { FETCH_DATA_PENDING } from "../actions/dataAction";
import { FETCH_DATA_SUCCESS } from "../actions/dataAction";
import { FETCH_DATA_ERROR } from "../actions/dataAction";

const initialState = {
  data: [],
  currency: "USD",
  pending: false,
  error: null,
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_PENDING: {
      return {
        ...state,
        pending: true,
      };
    }

    case FETCH_DATA_SUCCESS: {
      return {
        ...state,
        pending: false,
        data: action.payload,
        currency: action.payload.currencies[0],
      };
    }

    case FETCH_DATA_ERROR: {
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    }

    default:
      return state;
  }
};

export default categoriesReducer;
