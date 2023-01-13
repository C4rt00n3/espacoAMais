import styled from "styled-components";

export const StyledRoversImgs = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;

  .conteiner {
    width: 100%;
    height: 85%;

    display: flex;
    justify-content: space-between;

    position: absolute;
    bottom: 0;
  }

  .moveAside {
    width: 25%;
    height: 100%;

    display: flex;
  }
  .cardImg {
    width: 65%;
    height: 100%;

    display: flex;

    @media (min-width: 1100px) {
      width: 70%;
    }

    > div {
      height: 82.5%;
      width: 100%;
      img {
        width: 94%;
      }
    }
  }
`;
