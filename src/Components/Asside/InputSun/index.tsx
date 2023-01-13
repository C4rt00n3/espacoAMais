import { StyledInputSun } from "./styled";

export const InputSun = () => {
  return (
    <StyledInputSun className="inputSol">
      <h4 className="subTitleSol">Sol :</h4>
      <div className="inputBox">
        <button className="sub">-</button>
        <input placeholder="0000" type="number" />
        <button className="sum">+</button>
      </div>
    </StyledInputSun>
  );
};
