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
} from "./Product.style";

class Product extends Component {
  state = {
    items: {},
    variants: {},
    img: "",
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

  render() {
    const { currentCurr, cartList, increase, addItemToCart } = this.props;
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
              <Button
                inStock={product.inStock}
                onClick={
                  product.inStock
                    ? () =>
                        handleAddToCart(
                          product.prices,
                          product,
                          this.state.variants,
                          cartList,
                          currentCurr,
                          addItemToCart,
                          increase
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
  currentCurr: state.currencyList.currency,
  cartList: state.cart.cartList,
});

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addToCart(item)),
  increase: (id) => dispatch(increaseQty(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
