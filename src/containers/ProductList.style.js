import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryName = styled.h1`
  text-transform: capitalize;
  font-size: 46px;
  padding-top: 30px;
  font-weight: normal;
`;

export const Container = styled.div`
  width: 100%;
  padding-bottom: 60px;
`;

export const Image = styled.img`
  display: block;
  width: 460px;
  height: 460px;
  object-fit: cover;
  opacity: ${(props) => (!props.inStock ? 0.5 : null)};
`;

export const WhiteCartWrapper = styled.div`
  align-self: end;
  margin-right: 30px;
  margin-top: -25px;
  bottom: 0;
  left: 80%;
  visibility: hidden;
`;

export const ProductListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(max-content, 480px));
  grid-gap: 100px;
  grid-auto-flow: dense;
  grid-template-rows: auto;
  padding-top: 40px;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1250px) {
    grid-gap: 40px;
  }

  @media only screen and (max-width: 700px) {
    grid-template-columns: repeat(auto-fill, minmax(max-content, 300px));
    grid-gap: 40px;

    ${Image} {
      width: 300px;
      height: 300px;
    }

    &:hover ${WhiteCartWrapper} {
      margin-right: 30px;
    }
  }
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;

  &:hover {
    opacity: 1;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }

  &:hover ${WhiteCartWrapper} {
    visibility: visible;
    opacity: 1;
  }
`;

export const WhiteCart = styled.div`
  background-color: #3cc16e;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  position: relative;
  cursor: pointer;
`;

export const CartImage = styled.img`
  margin: auto;
  display: block;
  position: absolute;
  margin: auto;
  top: -100%;
  right: -100%;
  bottom: -100%;
  left: -100%;
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const StyledLink = styled(Link)`
  text-align: center;
  display: inline-block;
  margin: 0 auto;
`;

export const OutOfStockWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const OutOfStockText = styled.p`
  color: #758184;
  font-weight: 500;
  font-size: 26px;
`;

export const ProductName = styled.p`
  font-size: 20px;
  color: #444444;
  margin: 0;
  cursor: pointer;
`;

export const ProductPrice = styled.h4`
  font-size: 18px;
  padding-left: 20;
  margin: 0;
`;

export const ProductLabel = styled.div`
  opacity: ${(props) => (!props.inStock ? 0.5 : null)};
`;
