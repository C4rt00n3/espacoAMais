import { AiFillCloseCircle } from "react-icons/ai";
import { StyledBocClose } from "./styled";

interface iBoxClose {
  close?: boolean;
}

export const BoxClose = ({ close }: iBoxClose) => {
  return (
    <StyledBocClose className="boxClose">
      <h3 className="subTitleFilter">Filtro</h3>
      {close && (
        <button>
          <AiFillCloseCircle />
        </button>
      )}
    </StyledBocClose>
  );
};
