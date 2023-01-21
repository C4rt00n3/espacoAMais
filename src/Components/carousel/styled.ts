import styled from "styled-components";
interface iImagem {
  imagem: string;
}
export const StyledCarousel = styled.div<iImagem>`
  width: 100vw;
  height: 100vh;

  background-color: rgb(0, 0, 0, 0.3);

  position: fixed;

  z-index: 3;

  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  button {
    position: absolute;
    top: 20px;
    right: 20px;

    width: 40px;
    height: 40px;

    background: none;
    border: none;

    z-index: 2;

    svg {
      width: 100%;
      height: 100%;

      color: var(--Withe);
    }
  }
  .usr {
    width: 100%;
    height: 100%;

    position: absolute;
  }
  .swiper-wrapper {
  }

  .swiper {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    @media (min-width: 699px) {
      width: 70%;
      height: 70%;
    }
    @media (min-width: 999px) {
      width: 80%;
      height: 90%;
    }
  }
`;

export const StyledSwiperImagem = styled.div<iImagem>`
  width: 100%;
  height: 100%;

  div {
    width: 100%;
    height: 100%;

    background-image: url(${({ imagem }) => imagem});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
  }

  @media (min-width: 1199px) {
    background-size: 100%;
  }
`;
