import { motion } from "framer-motion";
import { useContext } from "react";
import { ContextRovers } from "../../../Context/ContexRovers";
import { StyledListPhotos } from "./styled";

export const ListPhotos = () => {
  const { photos, rover } = useContext(ContextRovers);
  return (
    <StyledListPhotos>
      <motion.ul>
        {photos.map((element, i) => (
          <motion.li className="imgLi" key={i}>
            <img src={element.img_src} alt={"imagem do rover" + rover} />
          </motion.li>
        ))}
      </motion.ul>
    </StyledListPhotos>
  );
};
