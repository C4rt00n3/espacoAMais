import styled from "styled-components";

interface iStyledAside {
  close?: boolean;
  modal?: boolean;
}

export const StyledAsside = styled.aside<iStyledAside>`
  width: ${({ close }) => (close ? "100%" : "0")};
  height: ${({ close }) => (close ? "90%" : "0")};

  background-color: var(--WitheFocus);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  min-width: 320px;
  max-width: 320px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 0 8px 0 0;

  overflow: hidden;

  position: absolute;

  @media (min-width: 900px) {
    height: 85%;
  }
  button {
    width: 30px;
    height: 30px;

    border: none;
  }
  svg {
    width: 100%;
    height: 100%;

    color: var(--Black);
  }
  .subTitleFilter {
    font-size: var(--Font28);
    font-weight: 700;
  }
  .subTitleSol {
    font-size: var(--Font24);
    font-weight: 600;
  }
`;

export const StyledAsideDiv = styled.div<iStyledAside>`
  display: ${({ modal }) => !modal && "none"};

  .moveAside {
    height: 100%;
    width: min-content;
    position: fixed;

    display: flex;
    flex-direction: column-reverse;

    z-index: 2;

    left: 0;
    bottom: 0;
  }

  @media (min-width: 1200px) {
    display: flex;
    min-width: 320px;
  }
`;
