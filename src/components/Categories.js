import React, { Component } from "react";

import { LeftNav, StyledNavLink, CategoryName } from "./Categories.style";

export default class Categories extends Component {
  render() {
    const { categories } = this.props;
    return (
      <LeftNav>
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
      </LeftNav>
    );
  }
}
