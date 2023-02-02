import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthContext";
import { ContextRovers } from "../../../Context/ContexRovers";
import { StyledDivDay } from "./styled";

export const InputDay = () => {
  const {
    setEarthDate,
    sun,
    rover,
    camera,
    earthDate,
    setPage,
    setBackup,
    setPhotos,
    setSun,
  } = useContext(ContextRovers);
  const nav = useNavigate();
  const { theme } = useContext(AuthContext);

  const seachDate = (date: string) => {
    setPage(1);
    setPhotos([]);
    setBackup([]);
    setEarthDate(date);
    setSun(0);
    nav(`/rover/${rover}/${sun}/${camera.length ? camera : "Todos"}/${date}`);
  };

  return (
    <StyledDivDay themeColor={theme} className="inputDay">
      <h4 className="subTitleSol">Dia Terrestre</h4>
      <input
        value={earthDate.length && earthDate}
        onInput={(e) => seachDate(e.currentTarget.value)}
        type="date"
      />
    </StyledDivDay>
  );
};
