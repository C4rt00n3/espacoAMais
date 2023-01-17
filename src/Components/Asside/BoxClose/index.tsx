import { useContext } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { ContextRovers } from "../../../Context/ContexRovers";
import { StyledBocClose } from "./styled";

interface iBoxClose {
  close?: boolean;
}

export const BoxClose = ({ close }: iBoxClose) => {
  const { setModal } = useContext(ContextRovers);
  return (
    <StyledBocClose className="boxClose">
      <h3 className="subTitleFilter">Filtro</h3>
      {close && (
        <button onClick={() => setModal(false)}>
          <AiFillCloseCircle />
        </button>
      )}
    </StyledBocClose>
  );
};
