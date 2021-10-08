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
        <h1 className="cart-label">CART</h1>
        {cartList.length === 0 ? (
          <EmptyText>You cart is empty!</EmptyText>
        ) : (
          cartList.map((list) =>
            list.items.map((item) => (
              <CartItems
                key={item.varId}
                item={item}
                list={list}
                changeOption={changeOption}
                increase={increase}
                decrease={decrease}
                currentCurr={currentCurr}
              />
            ))
          )
        )}
      </CartContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  cartList: state.cart.cartList,
  currentCurr: state.currencyList.currentCurrency,
});

const mapDispatchToProps = (dispatch) => ({
  increase: (id, prodId) => dispatch(increaseQty(id, prodId)),
  decrease: (id, prodId) => dispatch(decreaseQty(id, prodId)),
  changeOption: (name, value, id) => dispatch(changeSelected(name, value, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
