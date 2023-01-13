import styled from "styled-components";

export const StyledListPhotos = styled.div`
  ul {
    width: 90.7%;
    display: flex;
    flex-wrap: wrap;

    justify-content: space-between;
    gap: 30px;
  }
  li {
    max-height: 300px;
    max-width: 300px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;
