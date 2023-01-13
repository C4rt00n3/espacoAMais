import styled from "styled-components";

export const StyledListPhotos = styled.div`
  display: flex;
  justify-content: center;
  ul {
    width: 90%;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: space-between;

    overflow: auto;

    margin-bottom: 50px;

    gap: 30px;

    li {
      min-width: 300px;
    }
    @media (min-width: 700px) {
      justify-content: space-between;
      flex-wrap: wrap;

      li {
        min-width: 30%;
        max-width: 30%;
      }
    }

    @media (max-width: 320px) {
      display: flex;
      flex-wrap: nowrap;

      overflow: auto;

      li {
        min-width: 300px;
        min-height: 300px;
      }
    }

    @media (min-width: 1100px) {
      width: 100%;
      flex-wrap: wrap;

      li {
        max-height: 30%;
        max-width: 30%;
      }
    }
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
