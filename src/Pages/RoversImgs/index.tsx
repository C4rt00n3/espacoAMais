import { Aside } from "../../Components/Asside";
import { Header } from "../../Components/Header";
import { StyledRoversImgs } from "./styled";
import nasa from "../../Assets/Imgs/ImagemNasa.svg";
import nasa2 from "../../Assets/Imgs/ImagemNasa2.svg";
import { motion } from "framer-motion";
import { ListPhotos } from "./ListPhot";
import { useContext, useState } from "react";
import { ContextRovers } from "../../Context/ContexRovers";

const Imagens = {
  img1: nasa,
  img2: nasa2,
};

export const RoversImgs = () => {
  const { modal } = useContext(ContextRovers);
  return (
    <StyledRoversImgs img={Imagens} className="indetificado">
      <Header />
      <div className="conteiner">
        {modal && <Aside close={true} />}
        <Aside />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="cardImg"
        >
          <div className="cardImageNasa"></div>

          <ListPhotos />
        </motion.div>
      </div>
    </StyledRoversImgs>
  );
};
