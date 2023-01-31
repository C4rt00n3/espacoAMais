import styled from "styled-components";

interface iSTyledCams {
  width: string;
}

export const StyledCamsList = styled.div`
  .backgroundBlue {
    background: none;
    color: var(--PrincipalBlue);
    border: 2px solid var(--PrincipalBlue);

    font-weight: 600;
  }
  button {
    width: min-content;
    height: min-content;

    background: none;

    padding: 0;
  }
  width: 90%;
  .carousel {
    width: 100%;

    max-height: 130px;

    overflow: hidden;

    ul {
      display: flex;
      flex-wrap: wrap;

      gap: 10px;
    }

    p {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;

      color: var(--Black);
    }
  }
`;

export const StyledLi = styled.div<iSTyledCams>`
  li {
    border-radius: 50px;

    background-color: var(--PrincipalBlue);
    color: var(--Withe);

    padding: 7px;

    max-width: ${({ width }) => width};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;
