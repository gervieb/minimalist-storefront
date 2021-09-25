import styled, { css } from "styled-components";

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

export const RightNav = styled.div`
  position: relative;
  display: flex;
`;

export const MainCurrency = styled.span`
  margin-right: 20px;
  padding-top: 4px;
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
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
`;

export const ShoppingBagIcon = styled.img`
  height: 25px;
  width: 30px;
`;

export const Overlay = styled.div`
  ${({ isDisplayed, cartLength }) =>
    isDisplayed && cartLength !== 0 ? overlay : hidden}
`;
