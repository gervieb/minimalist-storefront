import styled, { css } from "styled-components";

const btn = `
    font-size: large;
    width: 100%;
    padding: 15px 0px;
    border: none;
    color: #fff;
    margin-bottom: 20px;
    margin-top: 20px;
    cursor: pointer;
`;

const addToCart = `
background-color: #3cc16e;
`;

const outOfStock = `
background-color: #dddddd;
`;

export const Container = styled.div`
  width: 100%;
`;

export const MainImage = styled.img`
  display: block;
  width: 100%;
  min-width: 380px;
  height: 700px;
  object-fit: contain;
  padding-right: 40;
`;

export const GalleryWrapper = styled.div`
  display: flex;
  flex-direction: row;

  .right-img {
    align-items: center;
  }
`;

export const LeftImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;

  img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    margin: 5px;
  }
`;

export const ProductDetailsWrapper = styled.div`
  .product-details {
    width: 50%;
    margin-left: 40px;
  }
`;

export const ProductContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 60% 40%;
  margin-top: 5%;
  margin-bottom: 5%;
  grid-gap: 1em;

  @media only screen and (max-width: 1250px) {
    grid-template-columns: 100%;
    justify-content: center;
    .product-details {
      margin-top: 40px;
    }

    ${GalleryWrapper} {
      justify-content: center;
    }

    ${ProductDetailsWrapper} {
      display: flex;
      justify-content: center;

      .product-details {
        width: 70%;
      }
    }
  }

  @media only screen and (max-width: 700px) {
    ${MainImage} {
      height: 400px;
      margin-bottom: 20px;
    }

    ${LeftImgWrapper} {
      margin: auto;
      flex-direction: row;

      img {
        width: 80px;
        height: 80px;
      }
    }
    ${ProductDetailsWrapper} {
      .product-details {
        width: 90%;
      }
    }

    ${GalleryWrapper} {
      flex-direction: column-reverse;
    }
  }
`;

export const Title = styled.div`
  font-size: 22px;
  margin-bottom: 40px;

  h2 {
    padding: 0;
    margin: 0;
  }

  .prod-name {
    font-weight: 400;
    margin-top: 0;
    padding-top: 0;
  }
`;

export const Label = styled.h3`
  font-weight: 600;
  margin-bottom: 0;

  .amount {
    margin-top: 3px;
  }
`;

export const Button = styled.button`
  ${(props) =>
    props.inStock
      ? css`
          ${btn} ${addToCart}
          &:hover {
            background: #007944;
          }
        `
      : css`
          ${btn} ${outOfStock}
        `}
`;
