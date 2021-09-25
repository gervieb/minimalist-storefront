import { gql } from "graphql-request";

export const endpoint = "http://localhost:4000/";

export const queryData = gql`
  {
    categories {
      name
      products {
        id
        name
        inStock
        gallery
        description
        category
        brand
        prices {
          currency
          amount
        }
        attributes {
          name
          id
          type
          items {
            displayValue
            value
            id
          }
        }
      }
    }
    currencies
  }
`;

export const queryCategory = gql`
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
