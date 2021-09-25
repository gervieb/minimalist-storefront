import React, { Component } from "react";
import MiniCart from "./MiniCart";
import blackCart from "../assets/black-cart.png";
import shoppingBag from "../assets/shopping-bag.png";
import { changeCurrency } from "../redux/actions/currencyAction";
import { displayCart } from "../redux/actions/displayAction";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import CurrencyModal from "../components/Currency";
import Categories from "../components/Categories";
import {
  NavbarContainer,
  ShoppingBagIcon,
  Overlay,
  RightNav,
  MainCurrency,
  ArrowDown,
  ArrowUp,
  CartIconWrapper,
  CartLengthWrapper,
} from "./Navbar.style";

class Navbar extends Component {
  state = {
    currencyDisplay: false,
  };

  handleChangeDisplay = (bool) => {
    this.setState({ currencyDisplay: bool });
  };

  render() {
    const {
      currencies,
      currentCurr,
      display,
      cartList,
      categories,
      isDisplayed,
      saveNewCurrency,
    } = this.props;

    const cartLength = cartList.map((list) =>
      list.items.map((item) => item.qty)
    );

    const totalLength = cartLength.flat().reduce((acc, sum) => acc + sum, 0);

    return (
      <NavbarContainer>
        <Categories categories={categories} />
        <div>
          <ShoppingBagIcon src={shoppingBag} alt="shopping bag icon" />
        </div>
        <RightNav>
          <MainCurrency
            onClick={() =>
              this.setState({
                currencyDisplay: !this.state.currencyDisplay,
              })
            }
          >
            {currentCurr}
            {this.state.currencyDisplay ? <ArrowUp /> : <ArrowDown />}
          </MainCurrency>
          <CurrencyModal
            currencies={currencies}
            saveNewCurrency={saveNewCurrency}
            onChangeDisplay={this.handleChangeDisplay}
            currencyDisplay={this.state.currencyDisplay}
          />
          <CartIconWrapper
            onMouseEnter={() => display(true)}
            onMouseLeave={() => display(false)}
          >
            <img src={blackCart} alt="cart icon" />
            {totalLength > 0 && (
              <CartLengthWrapper>
                <span className="cart-length">{totalLength}</span>
              </CartLengthWrapper>
            )}

            <MiniCart cartLength={totalLength} />
          </CartIconWrapper>
        </RightNav>
        <Overlay isDisplayed={isDisplayed} cartLength={totalLength}></Overlay>
      </NavbarContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.dataList.data.categories,
  currencies: state.dataList.data.currencies,
  currentCurr: state.currencyList.currency,
  cartList: state.cart.cartList,
  isDisplayed: state.displayCart.isDisplayed,
});

const mapDispatchToProps = (dispatch) => ({
  saveNewCurrency: (curr) => dispatch(changeCurrency(curr)),
  display: (bool) => dispatch(displayCart(bool)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
