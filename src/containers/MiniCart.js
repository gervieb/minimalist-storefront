import React, { Component } from "react";
import MiniCartItems from "../components/MiniCartItems";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { displayCart } from "../redux/actions/displayAction";
import { increaseQty, decreaseQty } from "../redux/actions/cartAction";
import getSymbolFromCurrency from "currency-symbol-map";
import {
  CartOverlayContainer,
  Header,
  TotalWrapper,
  ButtonWrapper,
  Button,
} from "./MiniCart.style";

class MiniCart extends Component {
  render() {
    const {
      isCartDisplayed,
      cartList,
      cartLength,
      history,
      display,
      decrease,
      increase,
      currentCurr,
    } = this.props;

    const pricesArray = cartList.map((list) =>
      list.items.map((item) =>
        item.product.prices
          .filter((price) => price.currency === currentCurr)
          .map((el) => el.amount * item.qty)
      )
    );

    const totalAmount = Number(
      pricesArray.flat(Infinity).reduce((acc, sum) => acc + sum, 0)
    ).toFixed(2);

    return (
      <CartOverlayContainer
        isCartDisplayed={isCartDisplayed}
        cartLength={cartLength}
      >
        <Header>
          My Bag,{" "}
          <span>
            {cartLength} {cartLength > 1 ? "items" : "item"}
          </span>
        </Header>
        {cartLength !== 0 && (
          <div className="miniCartItemWrapper">
            {cartList.map((list) => (
              <MiniCartItems
                key={list.productId}
                list={list}
                increase={increase}
                decrease={decrease}
                currentCurr={currentCurr}
                getSymbolFromCurrency={getSymbolFromCurrency}
              />
            ))}
            <TotalWrapper>
              <p>Total</p>
              <p className="total-amount">
                {getSymbolFromCurrency(currentCurr)}
                {totalAmount}
              </p>
            </TotalWrapper>
            <ButtonWrapper>
              <Button
                className="view-bag-btn"
                onClick={() => {
                  history.push("/cartpage");
                  display(false);
                }}
              >
                VIEW BAG
              </Button>
              <Button className="checkout-btn">CHECKOUT</Button>
            </ButtonWrapper>
          </div>
        )}
      </CartOverlayContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  isCartDisplayed: state.displayCart.isCartDisplayed,
  cartList: state.cart.cartList,
  currentCurr: state.currencyList.currentCurrency,
});

const mapDispatchToProps = (dispatch) => ({
  display: (bool) => dispatch(displayCart(bool)),
  increase: (id, prodId) => dispatch(increaseQty(id, prodId)),
  decrease: (id, prodId) => dispatch(decreaseQty(id, prodId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MiniCart));
