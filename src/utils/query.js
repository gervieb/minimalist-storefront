import { gql } from "graphql-request";

export const endpoint = "http://localhost:4000/";

export const queryCategories = gql`
  query Query {
    categories {
      name
    }
  }
`;

export const queryCurrencies = gql`
  query Query {
    currencies
  }
`;

export const queryAllProducts = gql`
  query Query {
    categories {
      products {
        id
        name
        inStock
        gallery
        description
        category
        attributes {
          name
          type
          id
          items {
            displayValue
            value
            id
          }
        }
        prices {
          currency
          amount
        }
        brand
      }
    }
  }
`;

export const quertProductByCategory = gql`
  query Query($categoryInput: CategoryInput) {
    category(input: $categoryInput) {
      products {
        name
        id
        inStock
        gallery
        description
        category
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
        prices {
          currency
          amount
        }
        brand
      }
    }
  }
`;

export const queryProductDetails = gql`
  query Query($productId: String!) {
    product(id: $productId) {
      id
      name
      inStock
      gallery
      description
      category
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
      prices {
        currency
        amount
      }
      brand
    }
  }
`;
