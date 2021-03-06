import React, { Component } from "react";
import CartAttributes from "./CartAttributes";
import { currencyConverter } from "../utils/productUtils";
import getSymbolFromCurrency from "currency-symbol-map";
import {
  CartItemWrapper,
  CartProductLeft,
  AttributesWrapper,
  CartAtrributesWrapper,
  Options,
  CartProductRight,
  Title,
  QuantityWrapper,
  Sign,
  Image,
  ImageGallery,
  NextButton,
  PreviousButton,
  Label,
} from "./CartItems.style";

class CartItems extends Component {
  state = {
    currentIndex: 0,
  };

  nextImage = (imgLength) => {
    const { currentIndex } = this.state;
    const newIndex = currentIndex === imgLength - 1 ? 0 : currentIndex + 1;
    this.setState({ currentIndex: newIndex });
  };

  prevImage = (imgLength) => {
    const { currentIndex } = this.state;
    const newIndex = currentIndex === 0 ? imgLength - 1 : currentIndex - 1;
    this.setState({ currentIndex: newIndex });
  };

  render() {
    const { list, item, increase, decrease, changeOption, currentCurr } =
      this.props;

    return (
      <CartItemWrapper>
        <CartProductLeft>
          <Title>
            <p className="brand">{item.product.brand}</p>
            <p>{item.product.name}</p>
          </Title>
          <h4 className="item-amount">
            {getSymbolFromCurrency(currentCurr)}
            {currencyConverter(item.product.prices, currentCurr)}
          </h4>
          <AttributesWrapper>
            {item.product.attributes.map((attri) => (
              <Options key={attri.id}>
                <Label>{attri.name}</Label>
                <CartAtrributesWrapper>
                  {attri.items.map((el) => (
                    <CartAttributes
                      key={el.id}
                      el={el}
                      item={item}
                      attri={attri}
                      changeOption={changeOption}
                    />
                  ))}
                </CartAtrributesWrapper>
              </Options>
            ))}
          </AttributesWrapper>
        </CartProductLeft>
        <CartProductRight>
          <QuantityWrapper>
            <Sign onClick={() => increase(item.varId, list.productId)}>+</Sign>
            <span className="item-quantity">{item.qty}</span>
            <Sign onClick={() => decrease(item.varId, list.productId)}>-</Sign>
          </QuantityWrapper>
          <ImageGallery>
            {item.product.gallery.length > 1 && (
              <PreviousButton
                onClick={() => this.prevImage(item.product.gallery.length)}
              >
                &lt;
              </PreviousButton>
            )}
            <Image
              src={item.product.gallery[this.state.currentIndex]}
              alt="image gallery"
            />
            {item.product.gallery.length > 1 && (
              <NextButton
                onClick={() => this.nextImage(item.product.gallery.length)}
              >
                &gt;
              </NextButton>
            )}
          </ImageGallery>
        </CartProductRight>
      </CartItemWrapper>
    );
  }
}

export default CartItems;
