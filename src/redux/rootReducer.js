import { combineReducers } from "redux";
import dataReducer from "./reducers/dataReducer";
import displayReducer from "./reducers/displayReducer";
import cartReducer from "./reducers/cartReducer";
import currencyReducer from "./reducers/currencyReducer";

const rootReducer = combineReducers({
  dataList: dataReducer,
  displayCart: displayReducer,
  cart: cartReducer,
  currencyList: currencyReducer,
});

export default rootReducer;
