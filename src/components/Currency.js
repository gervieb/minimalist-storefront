import React, { Component } from "react";
import { CurrencyValue, CurrencyOptions } from "./Currency.style";

export default class Currency extends Component {
  render() {
    const { currencies, saveNewCurrency, onChangeDisplay, currencyDisplay } =
      this.props;
    return (
      <CurrencyOptions isCurrencyDisplay={currencyDisplay}>
        {currencies &&
          currencies.map((currency, i) => {
            return (
              <CurrencyValue
                key={i}
                onClick={() => {
                  saveNewCurrency(currency);
                  onChangeDisplay(false);
                }}
              >
                {currency}
              </CurrencyValue>
            );
          })}
      </CurrencyOptions>
    );
  }
}
