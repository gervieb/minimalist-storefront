import React, { Component } from "react";
import MiniCart from "./MiniCart";
import blackCart from "../assets/black-cart.png";
import menu from "../assets/menu-nav.png";
import shoppingBag from "../assets/shopping-bag.png";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import CurrencyModal from "../components/Currencies";
import NavMenu from "../components/NavMenu";
import getSymbolFromCurrency from "currency-symbol-map";
import SidePanel from "../components/Sidepanel";
import { queryCategories, endpoint } from "../utils/query";
import { request } from "graphql-request";
import {
  displayCart,
  displayCurrency,
  displaySidepanel,
} from "../redux/actions/displayAction";
import {
  NavbarContainer,
  ShoppingBagIcon,
  Overlay,
  LeftNav,
  LeftNavLink,
  RightNav,
  MainCurrency,
  ArrowDown,
  ArrowUp,
  CartIconWrapper,
  CartLengthWrapper,
} from "./Navbar.style";

class Navbar extends Component {
  state = {
    categories: [],
  };

  componentDidMount = () => {
    this.queryCategories();
  };

  queryCategories = async () => {
    const data = await request(endpoint, queryCategories);
    this.setState({ categories: data.categories });
  };

  handleChangeDisplay = (bool) => {
    this.props.setDisplayCurr(bool);
  };

  render() {
    const {
      currentCurr,
      setDisplayCart,
      cartList,
      isCartDisplayed,
      isCurrDisplayed,
      history,
      box,
      setDisplayCurr,
      isSidepanelDisplayed,
      setDisplaySidepanel,
    } = this.props;

    const cartLength = cartList.map((list) =>
      list.items.map((item) => item.qty)
    );

    const totalLength = cartLength.flat().reduce((acc, sum) => acc + sum, 0);
    const categories = this.state.categories;

    return (
      <NavbarContainer>
        <LeftNav>
          <LeftNavLink>
            <NavMenu categories={categories} />
          </LeftNavLink>
          <img
            src={menu}
            alt="menu icon"
            className="menu-icon"
            onClick={() => setDisplaySidepanel(true)}
          />
        </LeftNav>
        <SidePanel
          setDisplaySidepanel={setDisplaySidepanel}
          isSidepanelDisplayed={isSidepanelDisplayed}
          categories={categories}
        />
        <ShoppingBagIcon
          src={shoppingBag}
          alt="shopping bag icon"
          onClick={() => history.push("/")}
        />
        <RightNav>
          <MainCurrency
            ref={box}
            onClick={() => setDisplayCurr(!isCurrDisplayed)}
          >
            {getSymbolFromCurrency(currentCurr)}
            {isCurrDisplayed ? <ArrowUp /> : <ArrowDown />}
          </MainCurrency>
          <CurrencyModal
            getSymbolFromCurrency={getSymbolFromCurrency}
            onChangeDisplay={this.handleChangeDisplay}
            isCurrDisplayed={isCurrDisplayed}
          />
          <CartIconWrapper
            onMouseEnter={() => !isCurrDisplayed && setDisplayCart(true)}
            onMouseLeave={() => setDisplayCart(false)}
          >
            <img src={blackCart} alt="cart icon" />
            {totalLength > 0 && (
              <CartLengthWrapper>
                <span className="cart-length">{totalLength}</span>
              </CartLengthWrapper>
            )}

            <MiniCart cartLength={totalLength} />
          </CartIconWrapper>
        </RightNav>
        <Overlay
          isCartDisplayed={isCartDisplayed}
          cartLength={totalLength}
        ></Overlay>
      </NavbarContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  currentCurr: state.currencyList.currentCurrency,
  cartList: state.cart.cartList,
  isCartDisplayed: state.displayCart.isCartDisplayed,
  isCurrDisplayed: state.displayCart.isCurrDisplayed,
  isSidepanelDisplayed: state.displayCart.isSidepanelDisplayed,
});

const mapDispatchToProps = (dispatch) => ({
  setDisplayCart: (bool) => dispatch(displayCart(bool)),
  setDisplayCurr: (bool) => dispatch(displayCurrency(bool)),
  setDisplaySidepanel: (bool) => dispatch(displaySidepanel(bool)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
