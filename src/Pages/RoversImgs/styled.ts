import styled from "styled-components";

interface iStyledImg {
  img: iObjImgs;
}

interface iObjImgs {
  img1: string;
  img2: string;
}

export const StyledRoversImgs = styled.div<iStyledImg>`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  .conteiner {
    width: 100%;
    height: 85%;

    margin: 60px 0 0 0;

    display: flex;
    justify-content: space-between;

    overflow-x: hidden;

    @media (min-width: 1100px) {
      width: 90%;

      position: absolute;
      bottom: 0;
    }
  }

  .cardImg {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    gap: 40px;

    @media (min-width: 1000px) {
    }
  }
  .cardImageNasa {
    width: 100%;
    height: 100%;

    min-height: 400px;

    background-image: url(${({ img }) => img.img1});
    background-repeat: no-repeat;

    background-size: cover;

    @media (min-width: 800px) {
      background-image: url(${({ img }) => img.img2});
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
