import styled from "styled-components";

export const StyledInputSun = styled.div`
  width: 90%;

  display: flex;
  align-items: center;

  gap: 1rem;
  button {
    width: 30px;
    height: 30px;

    background-color: var(--PrincipalOrange);
    color: var(--Withe);

    font-weight: 700;
  }

  div {
    display: flex;
    align-items: center;

    gap: 10px;
  }
  .sum {
    border-radius: 0 8px 8px 0;
  }
  .sub {
    border-radius: 8px 0 0 8px;
  }
  input {
    max-width: 70px;
    min-height: 30px;

    padding: 0 0 0 10px;

    border: none;

    background-color: var(--PrincipalOrange);
    color: var(--Withe);
  }
`;
