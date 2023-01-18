import styled from "styled-components";

export const StyledSelectDiv = styled.div`
  width: 90%;

  display: flex;
  flex-direction: column;

  gap: 10px;

  select {
    height: 40px;

    border: none;

    outline: 1px solid var(--Black);

    border-radius: 50px;

    option {
      font-size: 0.6rem;

      padding: 0;
    }
  }
  .hidden {
    display: none;
    width: 0;
    height: 0;

    font-size: 0;
  }
`;
