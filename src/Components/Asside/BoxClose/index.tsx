import { useContext } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { ContextRovers } from "../../../Context/ContexRovers";
import { StyledBocClose } from "./styled";

interface iBoxClose {
  setWidth: React.Dispatch<React.SetStateAction<number>>;
  setZero: React.Dispatch<React.SetStateAction<number>>;
  width: number;
}

export const BoxClose = ({ width, setWidth, setZero }: iBoxClose) => {
  const { setModal } = useContext(ContextRovers);

  const close = () => {
    setZero(-width);
    setWidth(0);
    setTimeout(() => {
      setModal(false);
    }, 600);
  };

  return (
    <StyledBocClose className="boxClose">
      <h3 className="subTitleFilter">Filtro</h3>
      <button onClick={() => close()}>
        <AiFillCloseCircle />
      </button>
    </StyledBocClose>
  );
};
