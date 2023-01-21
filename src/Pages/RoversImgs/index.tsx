import { Aside } from "../../Components/Asside";
import { Header } from "../../Components/Header";
import { StyledRoversImgs } from "./styled";
import nasa from "../../Assets/Imgs/ImagemNasa.svg";
import nasa2 from "../../Assets/Imgs/ImagemNasa2.svg";
import { motion } from "framer-motion";
import { ListPhotos } from "./ListPhot";
import { useContext, useEffect, useState } from "react";
import { ContextRovers } from "../../Context/ContexRovers";
import { IoMdRocket } from "react-icons/io";
import { Carousel } from "../../Components/carousel";

const Imagens = {
  img1: nasa,
  img2: nasa2,
};

export const RoversImgs = () => {
  const { modal, modalImg, setModalImg, setIndex, index } =
    useContext(ContextRovers);
  const [scroll, setScrollPosition] = useState(0);

  const sizeMonitor = window.outerHeight;

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <StyledRoversImgs img={Imagens} className="indetificado">
      {modalImg && <Carousel i={index} setModalImg={setModalImg} />}

      <Header />
      <div className="gap"></div>
      <div className="conteiner">
        {modal && <Aside close={true} />}
        {!modal && <Aside close={false} />}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="cardImg"
        >
          <p id="ref" className="hidden"></p>
          <div className="cardImageNasa"></div>

          <ListPhotos setIndex={setIndex} setModalImg={setModalImg} />
        </motion.div>
      </div>
      {scroll > sizeMonitor * 2 && !modalImg && (
        <a href="#ref" className="buttonRocket">
          <IoMdRocket className="rocket" />
        </a>
      )}
    </StyledRoversImgs>
  );
};
