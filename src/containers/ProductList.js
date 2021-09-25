import React, { Component } from "react";
import whiteCart from "../assets/white-cart.png";
import { addToCart } from "../redux/actions/cartAction";
import { connect } from "react-redux";
import { queryCategory, endpoint } from "../utils/query";
import { request } from "graphql-request";
import { increaseQty } from "../redux/actions/cartAction";
import { handleAddToCart, currencyConverter } from "../utils/productUtils";
import {
  CategoryName,
  Container,
  ProductListWrapper,
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
} from "./ProductList.style";

class ProductList extends Component {
  state = {
    productList: [],
  };

  componentDidMount = () => {
    this.queryProduct();
  };

  queryProduct = async () => {
    const variables = {
      title: this.props.match.params.categoryName,
    };
    const data = await request(endpoint, queryCategory, variables);
    this.setState({ productList: data.category.products });
  };

  render() {
    const { match, cartList, currentCurr, increase, addItemToCart } =
      this.props;
    const { productList } = this.state;

    const products =
      productList &&
      productList.filter((item) => item.category === match.params.categoryName);

    return (
      <Container>
        <CategoryName>{match.params.categoryName}</CategoryName>
        <ProductListWrapper>
          {products.map((product) => {
            return (
              <ProductWrapper key={product.id}>
                <StyledLink
                  to={{
                    pathname: `${match.url}/${product.id}`,
                    state: product,
                  }}
                >
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
                      handleAddToCart(
                        product.prices,
                        product,
                        null,
                        cartList,
                        currentCurr,
                        addItemToCart,
                        increase
                      )
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
                    {currentCurr}{" "}
                    {currencyConverter(product.prices, currentCurr)}
                  </ProductPrice>
                </ProductLabel>
              </ProductWrapper>
            );
          })}
        </ProductListWrapper>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  currentCurr: state.currencyList.currency,
  cartList: state.cart.cartList,
});

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addToCart(item)),
  increase: (id) => dispatch(increaseQty(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
