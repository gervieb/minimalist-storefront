import React, { Component } from "react";
import whiteCart from "../assets/white-cart.png";
import getSymbolFromCurrency from "currency-symbol-map";
import { handleAddToCart, currencyConverter } from "../utils/productUtils";
import { addToCart, increaseQty } from "../redux/actions/cartAction";
import { connect } from "react-redux";
import {
  WhiteCartWrapper,
  WhiteCart,
  CartImage,
  ImageWrapper,
  Image,
  ProductWrapper,
  StyledLink,
  OutOfStockWrapper,
  OutOfStockText,
  ProductName,
  ProductPrice,
  ProductLabel,
} from "./ProductListDisplay.style";

class ProductListDisplay extends Component {
  render() {
    const { product, cartList, currentCurr, increase, addItemToCart } =
      this.props;

    return (
      <ProductWrapper key={product.id}>
        <StyledLink to={`${product.category}/${product.id}`}>
          <ImageWrapper>
            <Image
              src={product.gallery[0]}
              alt={product.name}
              inStock={product.inStock}
            />
            {!product.inStock && (
              <OutOfStockWrapper>
                <OutOfStockText>OUT OF STOCK</OutOfStockText>
              </OutOfStockWrapper>
            )}
          </ImageWrapper>
        </StyledLink>
        {product.inStock && (
          <WhiteCartWrapper
            onClick={() =>
              handleAddToCart(product, null, cartList, addItemToCart, increase)
            }
          >
            <WhiteCart>
              <CartImage src={whiteCart} alt="cart icon" />
            </WhiteCart>
          </WhiteCartWrapper>
        )}
        <ProductLabel inStock={product.inStock}>
          <ProductName>{product.name}</ProductName>
          <ProductPrice>
            {getSymbolFromCurrency(currentCurr)}
            {currencyConverter(product.prices, currentCurr)}
          </ProductPrice>
        </ProductLabel>
      </ProductWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  currentCurr: state.currencyList.currentCurrency,
  cartList: state.cart.cartList,
});

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addToCart(item)),
  increase: (id) => dispatch(increaseQty(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductListDisplay);
