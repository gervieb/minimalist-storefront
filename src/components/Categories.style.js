import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const LeftNav = styled.div`
  display: flex;

  a {
    text-decoration: none;
    color: #000;
  }
`;

export const StyledNavLink = styled(NavLink)`
  &.${(props) => props.activeClassName} {
    color: #3cc16e;
    font-weight: 600;
    border-bottom: 2px solid #3cc16e;
    transition: border-bottom 0.3s ease-in-out;
  }
`;

export const CategoryName = styled.p`
  margin: 14px;
  letter-spacing: 0.8px;
  font-size: 19px;

  &:hover,
  &:active {
    color: #3cc16e;
  }
`;
