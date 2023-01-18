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

  .hidden {
    width: 0;
    height: 0;

    background: none;

    font-size: 0;

    position: absolute;
    top: 0;
  }

  .buttonRocket {
    width: 90px;
    height: min-content;

    position: absolute;
    top: 70px;

    background-color: var(--PrincipalBlue);
    color: var(--Withe);

    border-radius: 50px;

    padding: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    z-index: 4;

    border: none;
  }
  .rocket {
    width: 30px;
    height: 30px;
  }
  .conteiner {
    width: 100%;
    height: 85%;

    margin: 60px 0 0 0;

    display: flex;
    justify-content: space-between;

    @media (min-width: 1100px) {
      width: 90%;

      position: absolute;
      bottom: 0;
    }
  }
  .gap {
    width: 100%;
    height: 15%;

    position: fixed;
    z-index: 1;
    top: 0;

    background-color: var(--Withe);
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
