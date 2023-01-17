import { StyledHeader } from "./styled";
import Logo from "../../Assets/Imgs/espacoAMais.svg";
import { useContext } from "react";
import { ContextRovers } from "../../Context/ContexRovers";
import { AiOutlineMenu } from "react-icons/ai";

export const Header = () => {
  const { setModal } = useContext(ContextRovers);
  return (
    <StyledHeader>
      <div className="conteinerHeader">
        <img className="logo" src={Logo} alt="Espaço a Mais" />
        <button onClick={() => setModal(true)}>
          <AiOutlineMenu className="menu" />
        </button>
      </div>
    </StyledHeader>
  );
};
