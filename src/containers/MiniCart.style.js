import styled, { css } from "styled-components";

const showCart = css`
  display: block;
  padding: 10px;
  position: absolute;
  right: 5%;
  top: 100%;
  z-index: 10;
  width: 350px;
`;

const hiddenCart = css`
  display: none;
`;

const emptyCart = css`
  background-color: #444444;
  color: #fff;
`;

const overlayCart = css`
  background-color: white;
  color: black;
`;

const itemCount = css`
  color: #444444;
  font-size: medium;
`;

const emptyCount = css`
  color: #fff;
`;

export const Button = styled.button`
  font-size: large;
  padding: 10px 25px;
  margin-bottom: 20px;
  margin-top: 20px;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  overflow: hidden;
  position: relative;

  &:hover {
    color: #fff;
  }
`;

export const CartOverlayContainer = styled.div`
  ${({ cartLength }) => (cartLength === 0 ? emptyCart : overlayCart)}
  ${({ isDisplayed }) => (isDisplayed ? showCart : hiddenCart)}


  @media only screen and (max-width: 700px) {
    width: 300px;

    ${Button} {
      padding: 6px 18px;
    }
  }
`;

export const Header = styled.h3`
  font-weight: bolder;
  text-align: left;
`;

export const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-weight: bolder;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  .view-bag-btn {
    background-color: #fff;
    color: black;
    border: 1px solid black;
    cursor: pointer;

    &:hover {
      background: #3cc16e;
      color: #fff;
      border: 1px solid #3cc16e;
    }
  }

  .checkout-btn {
    background-color: #3cc16e;
    color: #fff;
    border: none;
  }
`;
