import styled from "styled-components";

interface iSTyledCams {
  width: string;
}

export const StyledCamsList = styled.div`
  width: 90%;
  .carousel {
    width: 100%;

    max-height: 120px;

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
  }
`;
