import React, { Component } from "react";
import { checkAttributeType, currencyConverter } from "../utils/productUtils";
import {
  SingleProdWrapper,
  CartProductWrapper,
  CartLeft,
  CartRight,
  AttributeWrapper,
  QuantityWrapper,
  Sign,
  Amount,
} from "./MiniCartItems.style";

export default class MiniCartItems extends Component {
  render() {
    const { list, increase, decrease, currentCurr } = this.props;

    return (
      <SingleProdWrapper>
        {list.items.map((item) => {
          return (
            <CartProductWrapper key={item.varId}>
              <CartLeft>
                <div>
                  <p className="prod-title">{item.product.brand}</p>
                  <p className="prod-title">{item.product.name}</p>
                </div>
                <Amount>
                  {currentCurr}{" "}
                  {Number(
                    currencyConverter(item.product.prices, currentCurr) *
                      item.qty
                  ).toFixed(2)}
                </Amount>
                <AttributeWrapper>
                  {Object.entries(item.variants).map(([key, value], idx) => (
                    <React.Fragment key={idx}>
                      {!checkAttributeType(item.product.attributes, key) ? (
                        <p className="item-value">{value}</p>
                      ) : (
                        <p
                          className="color item-value"
                          style={{ backgroundColor: value }}
                        ></p>
                      )}
                    </React.Fragment>
                  ))}
                </AttributeWrapper>
              </CartLeft>
              <CartRight>
                <QuantityWrapper>
                  <Sign onClick={() => increase(item.varId)}>+</Sign>
                  <span className="item-quantity">{item.qty}</span>
                  <Sign onClick={() => decrease(item.varId)}>-</Sign>
                </QuantityWrapper>
                <img src={item.product.gallery[0]} alt={item.product.name} />
              </CartRight>
            </CartProductWrapper>
          );
        })}
      </SingleProdWrapper>
    );
  }
}
