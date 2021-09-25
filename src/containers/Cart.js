import React, { Component } from "react";
import { connect } from "react-redux";
import CartItems from "../components/CartItems";
import {
  decreaseQty,
  increaseQty,
  changeSelected,
} from "../redux/actions/cartAction";

import { CartContainer, EmptyText } from "./Cart.style";

class Cart extends Component {
  render() {
    const { cartList, increase, decrease, changeOption, currentCurr } =
      this.props;

    return (
      <CartContainer>
        <h1 className="cart-label">Cart</h1>
        {cartList.length === 0 ? (
          <EmptyText>You cart is empty!</EmptyText>
        ) : (
          <>
            {cartList &&
              cartList.map((list) =>
                list.items.map((item) => (
                  <CartItems
                    item={item}
                    key={item.varId}
                    changeOption={changeOption}
                    increase={increase}
                    decrease={decrease}
                    currentCurr={currentCurr}
                  />
                ))
              )}
          </>
        )}
      </CartContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  cartList: state.cart.cartList,
  currentCurr: state.currencyList.currency,
});

const mapDispatchToProps = (dispatch) => ({
  increase: (id) => dispatch(increaseQty(id)),
  decrease: (id) => dispatch(decreaseQty(id)),
  changeOption: (name, value, id) => dispatch(changeSelected(name, value, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
