import { StyledHeader } from "./styled";
import Logo from "../../Assets/Imgs/espacoAMais.svg";
import Menu from "../../Assets/Imgs/Menu.svg";

export const Header = () => {
  return (
    <StyledHeader>
      <div className="conteinerHeader">
        <img className="logo" src={Logo} alt="Espaço a Mais" />
        <img className="menu" src={Menu} alt="Menu" />
      </div>
    </StyledHeader>
  );
};
