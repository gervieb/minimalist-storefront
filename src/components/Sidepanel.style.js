import styled, { css } from "styled-components";

const sidepanelDisplay = css`
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  background-color: white;
  z-index: 100;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  transition: 0.5s;

  .close-icon {
    cursor: pointer;
    width: 46px;
    padding-top: 5px;
    padding-left: 5px;
  }
`;

const sidepanelHidden = css`
  display: none;
`;

export const SidepanelWrapper = styled.div`
  display: none;

  @media only screen and (max-width: 480px) {
    ${({ isSidepanelDisplayed }) =>
      isSidepanelDisplayed ? sidepanelDisplay : sidepanelHidden}
  }
`;
