import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart, increaseQty } from "../redux/actions/cartAction";
import { handleAddToCart, currencyConverter } from "../utils/productUtils";
import ProductAttributes from "../components/ProductAttributes";
import {
  ProductContainer,
  GalleryWrapper,
  ProductDetailsWrapper,
  LeftImgWrapper,
  MainImage,
  Title,
  Label,
  Button,
  Container,
  ErrorMessage,
} from "./Product.style";

class Product extends Component {
  state = {
    items: {},
    variants: {},
    img: "",
    message: "Please choose product options",
    isError: false,
  };

  componentDidMount = () => {
    const product = Object.assign({}, this.props.location.state);
    this.setState({ img: product.gallery[0] });
  };

  displayImage = (imageURL) => {
    this.setState({ img: imageURL });
  };

  handleSelect = (attri, item) => {
    this.setState({
      ...this.state,
      variants: { ...this.state.variants, [attri.name]: item.value },
    });
  };

  verifyAttributes = (prices, product, category) => {
    const { variants } = this.state;
    const { cartList, currentCurr, addItemToCart, increase, data } = this.props;
    const arrKeys = Object.keys(variants);

    const res = data.categories
      .find((categories) => categories.name === category)
      .products.find((prod) => prod.id === product.id)
      .attributes.map((attri) => attri.name);

    if (arrKeys.length !== res.length) return this.setState({ isError: true });

    handleAddToCart(
      prices,
      product,
      variants,
      cartList,
      currentCurr,
      addItemToCart,
      increase
    );
    this.setState({ isError: false });
  };

  render() {
    const { currentCurr } = this.props;
    const product = Object.assign({}, this.props.location.state);

    return (
      <Container>
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
            <div className="right-img">
              <MainImage src={this.state.img} alt="product" />
            </div>
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
                {currentCurr} {currencyConverter(product.prices, currentCurr)}
              </h3>
              <ErrorMessage>
                {this.state.isError && this.state.message}
              </ErrorMessage>
              <Button
                inStock={product.inStock}
                onClick={
                  product.inStock
                    ? () =>
                        this.verifyAttributes(
                          product.prices,
                          product,
                          product.category
                        )
                    : null
                }
              >
                ADD TO CART
              </Button>
              <div dangerouslySetInnerHTML={{ __html: product.description }} />
            </div>
          </ProductDetailsWrapper>
        </ProductContainer>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.dataList.data,
  currentCurr: state.currencyList.currency,
  cartList: state.cart.cartList,
});

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addToCart(item)),
  increase: (id) => dispatch(increaseQty(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
