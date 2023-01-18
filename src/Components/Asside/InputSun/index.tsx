import { useContext } from "react";
import { ContextRovers } from "../../../Context/ContexRovers";
import { StyledInputSun } from "./styled";

export const InputSun = () => {
  const { setSun, setPhotos, sun, setPage, setCheckRequest, setBackup } =
    useContext(ContextRovers);

  function Sun(operator: string) {
    setCheckRequest(true);
    if (operator === "sub") {
      setPhotos([]);
      setBackup([]);
      setPage(0);
      setSun((e) => e - 1);
    } else if (operator === "sum") {
      setPhotos([]);
      setBackup([]);
      setPage(0);
      setSun((e) => e + 1);
    } else {
      setPhotos([]);
      setBackup([]);
      setPage(0);
      setSun(Number(operator));
    }
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
          type="number"
        />
        <button onClick={() => Sun("sum")} className="sum">
          +
        </button>
      </div>
    </StyledInputSun>
  );
};
