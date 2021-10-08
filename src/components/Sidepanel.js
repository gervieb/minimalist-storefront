import React, { Component } from "react";
import close from "../assets/close.png";
import { SidepanelWrapper } from "./Sidepanel.style";
import {
  StyledNavLink,
  CategoryName,
  NavMenuWrapper,
} from "../containers/Navbar.style";

export default class SidePanel extends Component {
  render() {
    const { setDisplaySidepanel, categories, isSidepanelDisplayed } =
      this.props;

    return (
      <SidepanelWrapper isSidepanelDisplayed={isSidepanelDisplayed}>
        <img
          src={close}
          alt="close icon"
          className="close-icon"
          onClick={() => setDisplaySidepanel(false)}
        />
        <NavMenuWrapper>
          <StyledNavLink
            to={"/"}
            exact
            activeClassName="nav-active"
            onClick={() => setDisplaySidepanel(false)}
          >
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
                  onClick={() => setDisplaySidepanel(false)}
                >
                  <CategoryName>{category.name.toUpperCase()}</CategoryName>
                </StyledNavLink>
              );
            })}
        </NavMenuWrapper>
      </SidepanelWrapper>
    );
  }
}
