export const CHANGE_CURRENCY = "CHANGE_CURRENCY";
export const SAVE_CURRENCIES = "SAVE_CURRENCIES";

export const changeCurrency = (curr) => {
  return {
    type: CHANGE_CURRENCY,
    payload: curr,
  };
};

export const saveCurrencies = (curr) => {
  return {
    type: SAVE_CURRENCIES,
    payload: curr,
  };
};
