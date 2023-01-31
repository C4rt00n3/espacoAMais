import { StyledHeader } from "./styled";
import Logo from "../../Assets/Imgs/espacoAMais.svg";
import { useContext } from "react";
import { ContextRovers } from "../../Context/ContexRovers";
import { AiOutlineMenu } from "react-icons/ai";
import LogoDark from "../../Assets/Imgs/espacoAMaisDark.svg";
import { AuthContext } from "../../Context/AuthContext";

export const Header = () => {
  const { setModal } = useContext(ContextRovers);
  const { theme } = useContext(AuthContext);
  return (
    <StyledHeader>
      <div className="conteinerHeader">
        <img
          className="logo"
          src={theme ? LogoDark : Logo}
          alt="Espaço a Mais"
        />
        <button onClick={() => setModal(true)}>
          <AiOutlineMenu className="menu" />
        </button>
      </div>
    </StyledHeader>
  );
};
