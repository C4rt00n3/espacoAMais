import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100vw;
  height: 60px;

  display: flex;
  justify-content: center;

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  background-color: var(--WitheFocus);

  position: fixed;

  left: 0;
  top: 0;
  z-index: 2;

  div {
    width: 90%;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .buttonMenu {
    border: none;
    background: none;

    @media (min-width: 1200px) {
      display: none;
      .menu {
        display: none;
      }
    }
  }
  .menu {
    width: 30px;
    height: 30px;

    color: var(--Black);
  }

  .logo {
    width: 25%;
    min-width: 155px;
    max-width: 280px;
  }
`;
