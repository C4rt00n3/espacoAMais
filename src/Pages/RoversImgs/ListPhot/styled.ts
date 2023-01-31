import styled from "styled-components";

interface iStyledPhotos {
  loading?: string;
}

export const StyledListPhotos = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  ul {
    width: 90%;

    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: space-between;
    flex-direction: row;

    margin-bottom: 50px;

    overflow: auto;

    gap: 250px;

    @media (min-width: 699px) {
      overflow: hidden;
      gap: 0;
    }

    h2 {
      font-size: var(--Font24);
      font-weight: 600;
    }
    @media (min-width: 700px) {
      justify-content: space-between;
      flex-wrap: wrap;
    }

    @media (min-width: 1100px) {
      width: 100%;
      flex-wrap: wrap;
    }
  }

  .imageCard {
    width: min-content;
    height: min-content;
  }
  .boxLoading {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    min-width: 30px;
    min-height: 30px;

    svg {
      width: 40px;
      height: 40px;

      position: absolute;

      color: var(--Black);

      margin-top: -60px;
    }
    .loading {
      animation: gira 1s infinite linear;
    }
    @keyframes gira {
      0% {
        transform: rotate(0deg);
        opacity: 20%;
      }
      25% {
        transform: rotate(90deg);
        opacity: 40%;
      }
      50% {
        transform: rotate(180deg);
        opacity: 60%;
      }
      75% {
        transform: rotate(270deg);
        opacity: 80%;
      }
      100% {
        opacity: 100%;
        transform: rotate(360deg);
      }
    }
  }
  li {
    width: 100%;
    height: 100%;

    min-height: 300px;
    min-width: 300px;

    margin-right: 40px;

    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-start;

    margin: 10px;

    cursor: pointer;

    p {
      font-weight: 600;
      color: #ffff;
    }
    @media (min-width: 699px) {
      min-height: 300px;
      min-width: 100%;

      margin-right: 0;

      gap: 0;
    }
  }
`;

export const StyledLi = styled.div<iStyledPhotos>`
  width: 30%;

  margin-bottom: 5%;

  @media (min-width: 699px) {
    width: 45%;
  }
  @media (min-width: 1199px) {
    width: 30%;
  }
  li {
    background-image: url(${({ loading }) => loading});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0;
  }
`;
