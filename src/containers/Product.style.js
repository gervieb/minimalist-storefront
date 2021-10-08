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

export const MainImage = styled.img`
  display: block;
  width: 100%;
  min-width: 380px;
  height: 500px;

  object-fit: contain;
  padding-right: 40;
`;

export const GalleryWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LeftImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
  cursor: pointer;

  img {
    width: 90px;
    height: 90px;
    object-fit: cover;
    margin: 5px;
  }
`;

export const RightImgWrapper = styled.div`
  align-items: center;
`;

export const ProductDetailsWrapper = styled.div`
  .product-details {
    width: 55%;
    margin-left: 40px;
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

export const ProductContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 5%;
  margin-bottom: 5%;
  grid-gap: 1em;

  @media only screen and (max-width: 1250px) {
    grid-template-columns: 100%;
    justify-content: center;

    .product-details {
      margin-top: 40px;
    }

    ${LeftImgWrapper} {
      img {
        width: 80px;
        height: 80px;
      }
    }

    ${MainImage} {
      height: 450px;
      min-width: auto;
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

  @media only screen and (max-width: 750px) {
    ${MainImage} {
      height: 300px;
      margin-bottom: 20px;
    }

    ${LeftImgWrapper} {
      margin: auto;
      flex-direction: row;
    }

    ${ProductDetailsWrapper} {
      .product-details {
        width: 90%;
        margin: auto;
      }
    }

    ${GalleryWrapper} {
      flex-direction: column-reverse;
    }
  }

  @media only screen and (max-width: 480px) {
    ${MainImage} {
      min-width: 0;
      height: 250px;
    }

    ${LeftImgWrapper} {
      img {
        width: 60px;
        height: 60px;
      }
    }

    ${Title} {
      font-size: 14px;
    }
  }
`;

export const Label = styled.h4`
  font-weight: 600;
  margin-bottom: 0;
  font-family: sans-serif;
  padding-bottom: 4px;

  .amount {
    margin-top: 3px;
  }
`;

export const ErrorMessage = styled.h5`
  color: red;
`;

export const SuccessMessage = styled.h5`
  color: green;
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
