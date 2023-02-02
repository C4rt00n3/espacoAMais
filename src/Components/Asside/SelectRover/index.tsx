import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextRovers } from "../../../Context/ContexRovers";
import { StyledSelectDiv } from "./styled";

export const SelectRover = () => {
  const { rover, setRover, setCheckRequest, setPhotos, setBackup, sun } =
    useContext(ContextRovers);
  const ArrayRover = ["Curiosity", "Opportunity", "Spirit", "Perseverance"];

  const nav = useNavigate();

  function selectRover(name: string) {
    setBackup([]);
    setPhotos([]);
    setCheckRequest(true);
    setRover(name);
    nav(`/rover/${name}/${sun}`);
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
