import styled from "styled-components";

export const StyledAsside = styled.aside`
  width: 100%;
  height: 85%;

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

  position: fixed;
  bottom: 0;
  left: 0;
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
