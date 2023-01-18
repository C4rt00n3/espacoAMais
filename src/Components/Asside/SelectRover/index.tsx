import { useContext } from "react";
import { ContextRovers } from "../../../Context/ContexRovers";
import { StyledSelectDiv } from "./styled";

export const SelectRover = () => {
  const { rover, setRover, setCheckRequest, setPhotos, setBackup } =
    useContext(ContextRovers);
  const ArrayRover = ["Curiosity", "Opportunity", "Spirit", "Perseverance"];

  function selectRover(name: string) {
    setBackup([]);
    setPhotos([]);
    setCheckRequest(true);
    setRover(name);
  }

  return (
    <StyledSelectDiv className="divRover">
      <h4 className="subTitleSol">Rover</h4>
      <select
        onChange={(e) => selectRover(e.currentTarget?.value)}
        name="Rovers"
        id=""
      >
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
