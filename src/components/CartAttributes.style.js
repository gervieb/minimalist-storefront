import styled, { css } from "styled-components";

const selectedText = css`
  background-color: #000;
  color: #fff;
`;

const cartItemValue = css`
  margin-right: 10px;
  border: 1px solid #000;
  padding: 8px 16px;
  margin-bottom: 0;
  cursor: pointer;
`;

const selectedColor = css`
  outline: 4px solid #000;
`;

export const SelectedText = styled.p`
  ${cartItemValue}
  ${({ isSelected }) => isSelected && selectedText}
  cursor: pointer;
`;

export const SelectedColor = styled.p`
  ${cartItemValue}
  ${({ isSelected }) => isSelected && selectedColor};
  background-color: ${({ color }) => color};
  cursor: pointer;
  width: 36px;
  height: 32px;
`;
