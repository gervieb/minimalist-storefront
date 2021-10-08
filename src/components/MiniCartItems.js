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
    const { list, increase, decrease, currentCurr, getSymbolFromCurrency } =
      this.props;
    return (
      <SingleProdWrapper>
        {list.items.map(
          (item) =>
            item.qty > 0 && (
              <CartProductWrapper key={item.varId}>
                <CartLeft>
                  <div>
                    <p className="prod-title">{item.product.brand}</p>
                    <p className="prod-title">{item.product.name}</p>
                  </div>
                  <Amount>
                    {getSymbolFromCurrency(currentCurr)}
                    {currencyConverter(item.product.prices, currentCurr)}
                  </Amount>
                  <AttributeWrapper>
                    {Object.entries(item.variants).map(([key, value], idx) => (
                      <React.Fragment key={idx}>
                        <h4 className="attri-name">{key}</h4>
                        {!checkAttributeType(item.product.attributes, key) ? (
                          <p className="attri-value ">{value}</p>
                        ) : (
                          <p
                            className="color attri-value"
                            style={{ backgroundColor: value }}
                          ></p>
                        )}
                      </React.Fragment>
                    ))}
                  </AttributeWrapper>
                </CartLeft>
                <CartRight>
                  <QuantityWrapper>
                    <Sign onClick={() => increase(item.varId, list.productId)}>
                      +
                    </Sign>
                    <span className="item-quantity">{item.qty}</span>
                    <Sign onClick={() => decrease(item.varId, list.productId)}>
                      -
                    </Sign>
                  </QuantityWrapper>
                  <img src={item.product.gallery[0]} alt={item.product.name} />
                </CartRight>
              </CartProductWrapper>
            )
        )}
      </SingleProdWrapper>
    );
  }
}
