import styled from "styled-components";

export const StyledListPhotos = styled.div`
  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    margin-bottom: 50px;

    gap: 40px;
  }
  li {
    max-height: 320px;
    max-width: 320px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;
