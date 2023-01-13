import styled from "styled-components";

export const StyledRoversImgs = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  .conteiner {
    width: 90%;
    height: 85%;

    display: flex;
    justify-content: space-between;

    overflow-x: hidden;
  }

  .moveAside {
    width: 25%;
    height: 100%;

    display: flex;
  }
  .cardImg {
    width: 80%;
    height: 100%;

    display: flex;
    flex-direction: column;

    gap: 40px;

    @media (min-width: 1100px) {
      width: 80%;
    }
  }
  .cardImageNasa {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .padd {
    width: 100%;
    height: 15%;
  }
`;
