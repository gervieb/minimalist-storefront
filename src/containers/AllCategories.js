import React, { Component } from "react";
import { request } from "graphql-request";
import { queryAllProducts, endpoint } from "../utils/query";
import { connect } from "react-redux";
import {
  fetchDataPending,
  fetchDataSuccess,
  fetchDataError,
} from "../redux/actions/dataAction";
import {
  Container,
  ProductListWrapper,
  CategoryName,
} from "./ProductList.style";
import ProductListDisplay from "../components/ProductListDisplay";

class AllCategories extends Component {
  componentDidMount = () => {
    this.fetchAllProducts();
  };

  fetchAllProducts = async () => {
    const { fetchPending, fetchSuccess, fetchError } = this.props;

    fetchPending();
    try {
      const data = await request(endpoint, queryAllProducts);
      fetchSuccess(data.categories);
    } catch (error) {
      fetchError(error);
    }
  };

  render() {
    const { dataList } = this.props;

    return (
      <Container>
        <CategoryName>All Categories</CategoryName>
        <ProductListWrapper>
          {dataList &&
            dataList.map((list) =>
              list.products.map((product) => {
                return (
                  <ProductListDisplay key={product.id} product={product} />
                );
              })
            )}
        </ProductListWrapper>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  dataList: state.dataList.data,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPending: () => dispatch(fetchDataPending()),
  fetchSuccess: (data) => dispatch(fetchDataSuccess(data)),
  fetchError: (error) => dispatch(fetchDataError(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllCategories);
