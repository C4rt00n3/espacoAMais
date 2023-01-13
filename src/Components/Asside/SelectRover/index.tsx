import { useContext } from "react";
import { ContextRovers } from "../../../Context/ContextRovers/ContextRover";
import { StyledSelectDiv } from "./styled";

export const SelectRover = () => {
  const { rover, setRover } = useContext(ContextRovers);
  const ArrayRover = ["Curiosity", "Opportunity", "Spirit", "Perseverance"];

  return (
    <StyledSelectDiv className="divRover">
      <h4 className="subTitleSol">Rover</h4>
      <select name="Rovers" id="">
        <option className="hidden" value={rover}>
          {rover}
        </option>
        {ArrayRover.map((element, i) => (
          <option value={element} key={i}>
            {element}
          </option>
        ))}
      </select>
    </StyledSelectDiv>
  );
};
