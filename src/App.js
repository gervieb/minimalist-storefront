import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product from "./containers/Product";
import AllCategories from "./containers/AllCategories";
import Cart from "./containers/Cart";
import Navbar from "./containers/Navbar";
import ProductList from "./containers/ProductList";
import { connect } from "react-redux";
import { displayCurrency } from "./redux/actions/displayAction";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.box = React.createRef();
  }

  componentDidMount() {
    document.addEventListener("click", this.handleOutsideClick);
  }

  handleOutsideClick = (e) => {
    if (this.box && !this.box.current.contains(e.target)) {
      this.props.setDisplayCurr(false);
    }
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar box={this.box} />
          <Switch>
            <Route path="/" exact component={AllCategories} />
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
  setDisplayCurr: (bool) => dispatch(displayCurrency(bool)),
});

export default connect(null, mapDispatchToProps)(App);
