export const CHANGE_CURRENCY = "CHANGE_CURRENCY";

export const changeCurrency = (curr) => {
  return {
    type: CHANGE_CURRENCY,
    payload: curr,
  };
};
