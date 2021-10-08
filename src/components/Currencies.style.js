import styled from "styled-components";

export const CurrencyBox = styled.div`
  z-index: 20;
  padding: 10px 40px 10px 10px;
  position: absolute;
  left: -10%;
  top: 100%;
  background-color: #fff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

export const CurrencyValue = styled.div`
  display: flex;
  font-weight: 600;

  p {
    font-size: 18px;
    text-align: left;
    padding: 5px 0;
    margin: 0;
    cursor: pointer;
  }

  &:hover {
    color: gray;
  }

  p:not(:first-child) {
    margin-left: 10px;
  }
`;
