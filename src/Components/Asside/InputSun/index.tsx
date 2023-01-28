import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextRovers } from "../../../Context/ContexRovers";
import { StyledInputSun } from "./styled";

export const InputSun = () => {
  const {
    setSun,
    setPhotos,
    sun,
    setPage,
    setCheckRequest,
    setBackup,
    rover,
    setCamera,
  } = useContext(ContextRovers);

  const nav = useNavigate();

  function Sun(operator: string) {
    setCheckRequest(true);
    if (operator === "sub") {
      setPhotos([]);
      setBackup([]);
      setPage(0);
      nav(`/rover/${rover}/${sun > 0 ? sun - 1 : 0}/`);
    } else if (operator === "sum") {
      setPhotos([]);
      setBackup([]);
      setPage(0);
      setSun((e) => e + 1);
      nav(`/rover/${rover ? rover : ""}/${sun >= 0 ? sun + 1 : 0}`);
    } else {
      setPhotos([]);
      setBackup([]);
      setPage(0);
      setSun(Number(operator));
      nav(`/rover/${rover}/${Number(operator) > 0 ? operator : 0}`);
    }
    setCamera("");
  }
  return (
    <StyledInputSun className="inputSol">
      <h4 className="subTitleSol">Sol :</h4>
      <div className="inputBox">
        <button onClick={() => Sun("sub")} className="sub">
          -
        </button>
        <input
          onInput={(e) => Sun(e.currentTarget.value)}
          placeholder={sun + ""}
          value={sun > 0 ? sun : ""}
          type="number"
        />
        <button onClick={() => Sun("sum")} className="sum">
          +
        </button>
      </div>
    </StyledInputSun>
  );
};
