import styled from "styled-components";

export const SingleProdWrapper = styled.div`
  margin: 5px;
`;

export const CartProductWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export const CartLeft = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .prod-title {
    margin: 0;
    padding: 0;
    font-size: 17px;
    color: #423f3e;
  }
`;

export const Amount = styled.h4`
  color: #444444;
  font-size: medium;
`;

export const CartRight = styled.div`
  display: flex;

  img {
    width: 120px;
    height: 140px;
    margin-left: 15px;
  }
`;

export const AttributeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .color {
    width: 24px;
    height: 22px;
  }

  .item-value {
    margin-bottom: 0;
    margin-top: 0;
    border: 1px solid #000;
    margin-right: 5px;
    padding: 1px 6px;
    font-size: small;
  }
`;

export const QuantityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .item-quantity {
    font-weight: bold;
  }
`;

export const Sign = styled.span`
  border: 1px solid #000;
  padding: 0px 4px;
  cursor: pointer;
`;
