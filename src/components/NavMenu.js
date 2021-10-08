import React, { Component } from "react";
import {
  StyledNavLink,
  CategoryName,
  NavMenuWrapper,
} from "../containers/Navbar.style";

export default class NavMenu extends Component {
  render() {
    const { categories } = this.props;

    return (
      <NavMenuWrapper>
        <StyledNavLink to={"/"} exact activeClassName="nav-active">
          <CategoryName>ALL</CategoryName>
        </StyledNavLink>
        {categories &&
          categories.map((category, i) => {
            return (
              <StyledNavLink
                key={i}
                to={{
                  pathname: `/${category.name}`,
                  state: category.products,
                }}
                exact
                activeClassName="nav-active"
              >
                <CategoryName>{category.name.toUpperCase()}</CategoryName>
              </StyledNavLink>
            );
          })}
      </NavMenuWrapper>
    );
  }
}
