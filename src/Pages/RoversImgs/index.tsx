import { Aside } from "../../Components/Asside";
import { Header } from "../../Components/Header";
import { StyledRoversImgs } from "./styled";
import nasa from "../../Assets/Imgs/ImagemNasa.svg";
import { motion } from "framer-motion";
import { ListPhotos } from "./ListPhot";

export const RoversImgs = () => {
  return (
    <StyledRoversImgs className="indetificado">
      <Header />
      <div className="padd"></div>
      <div className="conteiner">
        <Aside />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="cardImg"
        >
          <div className="cardImageNasa">
            <img src={nasa} alt="" />
          </div>

          <ListPhotos />
        </motion.div>
      </div>
    </StyledRoversImgs>
  );
};
