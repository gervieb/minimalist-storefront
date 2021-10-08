import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart, increaseQty } from "../redux/actions/cartAction";
import { handleAddToCart, currencyConverter } from "../utils/productUtils";
import { queryProductDetails, endpoint } from "../utils/query";
import ProductAttributes from "../components/ProductAttributes";
import getSymbolFromCurrency from "currency-symbol-map";
import DOMPurify from "dompurify";
import { request } from "graphql-request";
import {
  ProductContainer,
  GalleryWrapper,
  ProductDetailsWrapper,
  LeftImgWrapper,
  RightImgWrapper,
  MainImage,
  Title,
  Label,
  Button,
  ErrorMessage,
  SuccessMessage,
} from "./Product.style";

class Product extends Component {
  state = {
    product: {},
    items: {},
    variants: {},
    imgURL: "",
    errorMessage: "Please choose product options",
    isError: false,
    flashMessage: false,
  };

  componentDidMount = () => {
    this.queryProduct();
  };

  queryProduct = async () => {
    const variables = {
      productId: this.props.match.params.prodId,
    };
    const data = await request(endpoint, queryProductDetails, variables);
    this.setState({
      ...this.state,
      product: data.product,
      imgURL: data.product.gallery[0],
    });
  };

  displayImage = (imageURL) => {
    this.setState({ imgURL: imageURL });
  };

  handleSelect = (attri, item) => {
    this.setState({
      ...this.state,
      variants: { ...this.state.variants, [attri.name]: item.value },
    });
  };

  verifyAttributes = (product) => {
    const { variants } = this.state;
    const { cartList, addItemToCart, increase } = this.props;
    const arrKeys = Object.keys(variants);

    const res = product.attributes.map((attri) => attri.name);

    if (arrKeys.length !== res.length)
      return this.setState(
        { isError: true, flashMessage: true },
        this.flashMessage()
      );

    handleAddToCart(product, variants, cartList, addItemToCart, increase);
    this.setState(
      { isError: false, variants: {}, flashMessage: true },
      this.flashMessage()
    );
  };

  flashMessage = () => {
    setTimeout(() => this.closeFlashMessage(), 3000);
  };

  closeFlashMessage = () => {
    this.setState({ flashMessage: false });
  };

  render() {
    const { currentCurr } = this.props;
    const { product, imgURL } = this.state;

    const sanitizer = DOMPurify.sanitize;

    return product !== "undefined" && Object.keys(product).length !== 0 ? (
      <ProductContainer>
        <GalleryWrapper>
          <LeftImgWrapper>
            {product.gallery.map((url, i) => {
              return (
                <React.Fragment key={i}>
                  {i !== 0 && (
                    <img
                      src={url}
                      alt={product.name}
                      onClick={() => this.displayImage(url)}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </LeftImgWrapper>
          <RightImgWrapper>
            <MainImage src={imgURL} alt="product" />
          </RightImgWrapper>
        </GalleryWrapper>
        <ProductDetailsWrapper>
          <div className="product-details">
            <Title>
              <h2 className="prod-brand">{product.brand}</h2>
              <h2 className="prod-name">{product.name}</h2>
            </Title>
            <div>
              {product.attributes.map((attri) => (
                <ProductAttributes
                  key={attri.id}
                  attri={attri}
                  handleSelect={this.handleSelect}
                  variants={this.state.variants}
                />
              ))}
            </div>
            <Label>PRICE:</Label>
            <h3 className="amount">
              {getSymbolFromCurrency(currentCurr)}
              {currencyConverter(product.prices, currentCurr)}
            </h3>
            {this.state.flashMessage ? (
              <>
                {this.state.isError ? (
                  <ErrorMessage>{this.state.errorMessage}</ErrorMessage>
                ) : (
                  <SuccessMessage>product is added to cart</SuccessMessage>
                )}
              </>
            ) : null}

            <Button
              inStock={product.inStock}
              onClick={
                product.inStock ? () => this.verifyAttributes(product) : null
              }
            >
              ADD TO CART
            </Button>
            <div
              dangerouslySetInnerHTML={{
                __html: sanitizer(product.description),
              }}
            />
          </div>
        </ProductDetailsWrapper>
      </ProductContainer>
    ) : null;
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

export default connect(mapStateToProps, mapDispatchToProps)(Product);
