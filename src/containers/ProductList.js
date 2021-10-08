import React, { Component } from "react";

import { quertProductByCategory, endpoint } from "../utils/query";
import { request } from "graphql-request";
import {
  CategoryName,
  Container,
  ProductListWrapper,
} from "./ProductList.style";
import ProductListDisplay from "../components/ProductListDisplay";

class ProductList extends Component {
  state = {
    productList: [],
  };

  componentDidMount = () => {
    this.queryProduct().catch((error) => console.error(error));
  };

  queryProduct = async () => {
    const variables = {
      title: this.props.match.params.categoryName,
    };
    const data = await request(endpoint, quertProductByCategory, variables);
    this.setState({ productList: data.category.products });
  };

  render() {
    const { match, currentCurr } = this.props;
    const { productList } = this.state;

    const products =
      productList &&
      productList.filter((item) => item.category === match.params.categoryName);

    return (
      <Container>
        <CategoryName>{match.params.categoryName}</CategoryName>
        <ProductListWrapper>
          {products.map((product) => (
            <ProductListDisplay
              key={product.id}
              product={product}
              currentCurr={currentCurr}
            />
          ))}
        </ProductListWrapper>
      </Container>
    );
  }
}

export default ProductList;
