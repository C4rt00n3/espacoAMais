import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContextRovers } from "../../../Context/ContexRovers";
import { StyledDivDay } from "./styled";

export const InputDay = () => {
  const { setEarthDate, sun, rover, earthDate } = useContext(ContextRovers);
  const nav = useNavigate();

  const seachDate = (date: string) => {
    setEarthDate(date);
    nav(`/rover/${rover}/${sun}/none/${date}`);
  };

  return (
    <StyledDivDay className="inputDay">
      <h4 className="subTitleSol">Dia Terrestre</h4>
      <input
        value={earthDate.length && earthDate}
        onInput={(e) => seachDate(e.currentTarget.value)}
        type="date"
      />
    </StyledDivDay>
  );
};
