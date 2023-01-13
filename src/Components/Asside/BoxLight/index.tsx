import { StyledBoxLight } from "./styled";
import { BsSunFill } from "react-icons/bs";

export const BoxLight = () => {
  return (
    <StyledBoxLight className="boxLight">
      <button>
        <BsSunFill />
      </button>
    </StyledBoxLight>
  );
};
