import React, { Component } from "react";
import { connect } from "react-redux";
import { request } from "graphql-request";
import { endpoint, queryCurrencies } from "../utils/query";
import { CurrencyValue, CurrencyBox } from "./Currencies.style";
import {
  changeCurrency,
  saveCurrencies,
} from "../redux/actions/currencyAction";

class Currencies extends Component {
  componentDidMount = () => {
    this.fetchCurrencies();
  };

  fetchCurrencies = async () => {
    const data = await request(endpoint, queryCurrencies);
    this.props.saveCurrencyList(data.currencies);
  };

  render() {
    const {
      currencyList,
      changeCurrentCurrency,
      onChangeDisplay,
      isCurrDisplayed,
      getSymbolFromCurrency,
    } = this.props;

    return isCurrDisplayed ? (
      <CurrencyBox>
        {currencyList &&
          currencyList.map((currency, i) => {
            return (
              <CurrencyValue
                key={i}
                onClick={() => {
                  changeCurrentCurrency(currency);
                  onChangeDisplay(false);
                }}
              >
                <p>{getSymbolFromCurrency(currency)}</p>
                <p>{currency}</p>
              </CurrencyValue>
            );
          })}
      </CurrencyBox>
    ) : null;
  }
}

const mapStateToProps = (state) => ({
  currencyList: state.currencyList.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  saveCurrencyList: (curr) => dispatch(saveCurrencies(curr)),
  changeCurrentCurrency: (curr) => dispatch(changeCurrency(curr)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Currencies);
