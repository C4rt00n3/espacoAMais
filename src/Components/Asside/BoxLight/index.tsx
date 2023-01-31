import { StyledBoxLight } from "./styled";
import { BsSunFill } from "react-icons/bs";
import { AuthContext } from "../../../Context/AuthContext";
import { useContext } from "react";

export const BoxLight = () => {
  const { setTheme, theme } = useContext(AuthContext);

  const checkTheme = theme ? false : true;
  const changeTheme = () => {
    localStorage.setItem("theme", JSON.stringify(checkTheme));
    setTheme((e) => (e ? false : true));
  };

  return (
    <StyledBoxLight className="boxLight">
      <button onClick={() => changeTheme()}>
        <BsSunFill />
      </button>
    </StyledBoxLight>
  );
};
