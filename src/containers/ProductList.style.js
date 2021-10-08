import styled from "styled-components";
import {
  Image,
  WhiteCartWrapper,
} from "../components/ProductListDisplay.style";

export const CategoryName = styled.h1`
  text-transform: capitalize;
  font-size: 40px;
  font-weight: normal;
`;

export const ProductListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(max-content, 220px));
  grid-template-columns: repeat(3, 260px);
  grid-column-gap: 8em;
  grid-row-gap: 2em;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  margin-bottom: 40px;

  @media only screen and (max-width: 1250px) {
    ${ProductListWrapper} {
      grid-gap: 40px;
    }
  }

  @media only screen and (max-width: 1000px) {
    ${ProductListWrapper} {
      grid-template-columns: repeat(2, 260px);
    }

    ${CategoryName} {
      font-size: 36px;
    }
  }

  @media only screen and (max-width: 750px) {
    ${ProductListWrapper} {
      grid-template-columns: repeat(1, 260px);
      grid-gap: 40px;
    }

    ${CategoryName} {
      font-size: 28px;
    }

    &:hover ${WhiteCartWrapper} {
      margin-right: 30px;
    }
  }

  @media only screen and (max-width: 480px) {
    ${ProductListWrapper} {
      padding-top: 40px;
    }

    ${ProductListWrapper} {
      padding: 0;
    }

    ${Image} {
      width: 220px;
      height: 220px;
    }

    ${CategoryName} {
      padding-top: 20px;
    }
  }
`;
