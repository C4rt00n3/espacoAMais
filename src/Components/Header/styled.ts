import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: center;

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  background-color: var(--WitheFocus);

  position: fixed;

  div {
    width: 80%;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .menu {
    width: 30px;
    height: 30px;
  }

  .logo {
    width: 25%;
    min-width: 155px;
    max-width: 280px;
  }
`;
