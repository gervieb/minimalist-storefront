import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product from "./containers/Product";
import Cart from "./containers/Cart";
import Navbar from "./containers/Navbar";
import ProductList from "./containers/ProductList";
import { request } from "graphql-request";
import { queryData, endpoint } from "./utils/query";
import { connect } from "react-redux";
import {
  fetchDataPending,
  fetchDataSuccess,
  fetchDataError,
} from "./redux/actions/dataAction";
import "./App.css";

class App extends Component {
  componentDidMount = () => {
    this.fetchData();
  };

  fetchData = async () => {
    const { fetchPending, fetchSuccess, fetchError } = this.props;

    fetchPending();
    try {
      const data = await request(endpoint, queryData);
      fetchSuccess(data);
    } catch (error) {
      fetchError(error);
    }
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/cartpage" exact component={Cart} />
            <Route path="/:categoryName" exact component={ProductList} />
            <Route path="/:categoryName/:prodId" exact component={Product} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchPending: () => dispatch(fetchDataPending()),
  fetchSuccess: (data) => dispatch(fetchDataSuccess(data)),
  fetchError: (error) => dispatch(fetchDataError(error)),
});

export default connect(null, mapDispatchToProps)(App);
