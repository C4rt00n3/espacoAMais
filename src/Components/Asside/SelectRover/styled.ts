import styled from "styled-components";

export const StyledSelectDiv = styled.div`
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
  .hidden {
    display: none;
    width: 0;
    height: 0;

    font-size: 0;
  }
`;
