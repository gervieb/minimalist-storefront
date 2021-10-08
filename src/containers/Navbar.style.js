import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

const overlay = css`
  position: fixed;
  left: 0;
  top: 65px;
  display: block;
  background-color: #000;
  opacity: 0.5;
  z-index: 1;
  width: 100%;
  height: 100%;
`;

const hidden = css`
  display: none;
`;

const arrow = css`
  border: solid black;
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 2px;
  margin-left: 10px;
  margin-bottom: 2px;
`;

export const CategoryName = styled.p`
  margin: 14px;
  letter-spacing: 0.8px;
  font-size: 19px;

  &:hover,
  &:active {
    color: #3cc16e;
  }
`;

export const StyledNavLink = styled(NavLink)`
  &.${(props) => props.activeClassName} {
    color: #3cc16e;
    font-weight: 600;
    border-bottom: 2px solid #3cc16e;
    transition: border-bottom 0.3s ease-in-out;
  }
`;

export const LeftNavLink = styled.div`
  display: block;
`;

export const NavMenuWrapper = styled.div`
  display: flex;

  a {
    text-decoration: none;
    color: #000;
  }

  .close-icon {
    display: none;
  }

  ${CategoryName} {
    margin: 12px;
  }
`;

export const LeftNav = styled.div`
  .menu-icon {
    display: none;
    width: 26px;
    height: 26px;
  }
`;

export const RightNav = styled.div`
  position: relative;
  display: flex;
`;

export const MainCurrency = styled.span`
  margin-right: 20px;
  cursor: pointer;
  font-weight: 600;
  font-size: 20px;
`;

export const ArrowUp = styled.i`
  ${arrow}
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
`;

export const ArrowDown = styled.i`
  ${arrow}
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`;
export const CartIconWrapper = styled.div`
  position: relative;
  text-align: center;

  img {
    cursor: pointer;
  }
`;

export const CartLengthWrapper = styled.span`
  position: absolute;
  bottom: 50%;
  left: 80%;
  width: 18px;
  height: 18px;
  border: 1px solid black;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;

  .cart-length {
    color: #fff;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  padding-top: 10px;
  padding-bottom: 5px;
  background-color: white;
  z-index: 50;
  margin-top: 0;

  @media only screen and (max-width: 480px) {
    ${LeftNav} {
      .menu-icon {
        display: block;
        cursor: pointer;
      }
    }

    ${LeftNavLink} {
      display: none;
    }

    ${NavMenuWrapper} {
      flex-direction: column;
      align-items: center;

      a {
        margin-bottom: 10px;
      }

      ${StyledNavLink} {
        margin-bottom: 10px;
      }
    }
  }
`;

export const ShoppingBagIcon = styled.img`
  height: 25px;
  width: 30px;
  cursor: pointer;
`;

export const Overlay = styled.div`
  ${({ isCartDisplayed, cartLength }) =>
    isCartDisplayed && cartLength !== 0 ? overlay : hidden}
`;
