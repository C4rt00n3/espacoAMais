import styled from "styled-components";

interface IStyledDay {
  themeColor: boolean;
}

export const StyledDivDay = styled.div<IStyledDay>`
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

    background-color: var(--WitheFocus);
    color: var(--Black);
  }
  input[type="date"]::-webkit-calendar-picker-indicator {
    cursor: pointer;
    filter: ${({ themeColor }) =>
      themeColor
        ? ` invert(0.8) brightness(100%) sepia(100%) saturate(0) hue-rotate(240deg)`
        : "none"};
  }
`;
