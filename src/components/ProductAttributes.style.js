import styled, { css } from "styled-components";

const selectedItem = css`
  background: #000;
  color: #fff;
`;

const selectedColor = css`
  outline: 4px solid #000;
`;

const cartItemValue = css`
  margin-right: 10px;
  border: 1px solid #000;
  padding: 12px 24px;
  // margin-bottom: 0;
`;

export const ProductOptions = styled.div`
  margin-top: 20px;
`;

export const AttributeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
`;

export const SelectedText = styled.p`
  ${cartItemValue}
  ${({ isItemSelected }) => isItemSelected && selectedItem};
  cursor: pointer;
  margin-top: 0;
`;

export const SelectedColor = styled.p`
  ${cartItemValue}
  ${({ isColorSelected }) => isColorSelected && selectedColor};
  cursor: "pointer";
  background-color: ${({ value }) => value};
  width: 36px;
  height: 32px;
`;
