import styled from "styled-components";

export const StyledBocClose = styled.div`
  display: flex;
  justify-content: space-between;

  width: 90%;

  margin-top: 20px;

  button {
    background: none;

    @media (min-width: 1199px) {
      display: none;
    }
  }
`;
