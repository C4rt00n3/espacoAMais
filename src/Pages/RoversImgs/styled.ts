import styled from "styled-components";

export const StyledRoversImgs = styled.div`
  width: 100%;
  height: 100%;

  .conteiner {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-between;
  }

  .moveAside {
    width: 25%;
    height: 100%;

    display: flex;
    align-items: flex-end;
  }
  .cardImg {
    width: 70%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    > div {
      height: 82.5%;
      width: 100%;
      img {
        width: 94%;
      }
    }
  }
`;
