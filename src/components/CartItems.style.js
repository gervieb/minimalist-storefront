import styled, { css } from "styled-components";

const button = css`
  font-size: 28px;
  font-weight: 600;
  cursor: pointer;
  color: #fff;
`;

export const CartProductLeft = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  margin-bottom: 20px;
  margin-top: 20px .item-amount {
    color: #444444;
    font-size: medium;
  }
`;

export const CartItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-top: 1px solid #dddddd;
  padding: 10px 0;
  align-items: center;
`;

export const Title = styled.div`
  p {
    font-size: 22px;
    margin-top: 0;
    margin-bottom: 0;
  }

  .brand {
    font-weight: bolder;
  }
`;

export const AttributesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const Options = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const CartProductRight = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const QuantityWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;

  .item-quantity {
    font-weight: bold;
    font-size: 19px;
  }
`;

export const Sign = styled.span`
  border: 1px solid #000;
  padding: 4px 12px;
  font-size: 18px;
  cursor: pointer;
`;

export const ImageGallery = styled.div`
  position: relative;
`;

export const PreviousButton = styled.span`
  position: absolute;
  top: 40%;
  left: 5%;
  ${button}
`;

export const NextButton = styled.span`
  position: absolute;
  top: 40%;
  right: 5%;
  ${button}
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;
