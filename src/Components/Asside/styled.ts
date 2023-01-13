import styled from "styled-components";

export const StyledAsside = styled.aside`
  width: 100%;
  height: 80%;

  padding: 1rem 0 0 0;

  background-color: var(--WitheFocus);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  min-width: 320px;

  display: flex;
  align-items: center;
  flex-direction: column;

  border-radius: 0 8px 0 0;

  gap: 40px;
  .boxClose {
    display: flex;
    justify-content: space-between;

    width: 90%;
  }

  button {
    width: 30px;
    height: 30px;

    background: none;
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

  .inputSol {
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
  }
  .inputDay {
    width: 90%;

    display: flex;
    flex-direction: column;

    gap: 10px;

    input {
      border-radius: 50px;
      height: 40px;

      padding: 0 20px 0 20px;

      border: none;

      outline: 1px solid var(--Black);

      font-size: var(--Font20);
    }
  }
  .divRover {
    width: 90%;

    display: flex;
    flex-direction: column;

    gap: 10px;

    select {
      padding: 0 10px 0 10px;

      height: 40px;

      border: none;

      outline: 1px solid var(--Black);

      border-radius: 50px;
    }
  }
  .hidden {
    display: none;
    width: 0;
    height: 0;

    font-size: 0;
  }
  .boxLight {
    width: 90%;

    display: flex;
    justify-content: flex-end;

    button {
      width: 40px;
      height: 40px;
    }
  }
`;
