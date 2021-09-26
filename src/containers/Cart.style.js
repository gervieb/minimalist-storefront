import styled from "styled-components";

export const CartContainer = styled.div`
  width: 85%;
  margin-bottom: 60px;

  .cart-label {
    padding-top: 40px;
    font-size: 32px;
    font-family: sans-serif;
  }

  @media only screen and (max-width: 700px) {
    margin: auto;
    width: 90%;
  }
`;

export const EmptyText = styled.p`
  text-align: center;
  font-size: 24px;
`;
