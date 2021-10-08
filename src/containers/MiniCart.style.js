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

export const Button = styled.button`
  font-size: large;
  padding: 10px 24px;
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
  ${({ isCartDisplayed }) => (isCartDisplayed ? showCart : hiddenCart)}
  overflow-y: auto;
  max-height: 700px;
  max-height: 70vh;

  @media only screen and (max-width: 1000px) {
    ${Button} {
      padding: 8px 20px;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }

  @media only screen and (max-width: 750px) {
    width: 310px;

    ${Button} {
      padding: 6px 14px;
    }
  }
`;

export const Header = styled.h3`
  font-weight: bolder;
  text-align: left;
  padding-left: 5px;
`;

export const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 5px;

  p {
    font-weight: bolder;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;

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
