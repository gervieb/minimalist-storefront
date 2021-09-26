import styled, { css } from "styled-components";

const hidden = css`
  display: none;
`;

const currencyOption = css`
  position: absolute;
  left: -10%;
  top: 60%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  padding: 0px 50px 10px 10px;
  background-color: #fff;
`;

export const CurrencyOptions = styled.ul`
  z-index: 20;
  ${({ isCurrencyDisplay }) => (isCurrencyDisplay ? currencyOption : hidden)}
`;

export const CurrencyValue = styled.li`
  padding: 10px;
  font-weight: 600;
  font-size: 18px;
  list-style: none;
  margin: 0;
  text-align: left;
  padding-bottom: 0;
  cursor: pointer;

  &:hover {
    color: gray;
  }
`;
