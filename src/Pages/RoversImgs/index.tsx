import { Aside } from "../../Components/Asside";
import { Header } from "../../Components/Header";
import { StyledRoversImgs } from "./styled";
import nasa from "../../Assets/Imgs/ImagemNasa.svg";

export const RoversImgs = () => {
  return (
    <StyledRoversImgs>
      <Header />

      <div className="conteiner">
        <Aside />
        <div className="cardImg">
          <div>
            <img src={nasa} alt="" />
          </div>
        </div>
      </div>
    </StyledRoversImgs>
  );
};
