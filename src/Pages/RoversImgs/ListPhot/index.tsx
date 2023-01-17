import { motion } from "framer-motion";
import { useContext, useEffect, useRef } from "react";
import { ContextRovers } from "../../../Context/ContexRovers";
import { StyledListPhotos } from "./styled";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export const ListPhotos = () => {
  const { photos, rover, loading, setPage, checkRequest, sun } =
    useContext(ContextRovers);

  const observer = useRef<any>();

  useEffect(() => {
    const intersect = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting) && checkRequest) {
        setTimeout(() => {
          setPage((pageInsedeState) => pageInsedeState + 1);
        }, 500);
      }
    });
    if (observer.current) {
      intersect.observe(observer.current);
    }
    return () => intersect.disconnect();
  }, [setPage, loading]);

  return (
    <StyledListPhotos>
      <motion.ul>
        {photos.map((element, i) => (
          <motion.li className="imgLi" key={i}>
            <img src={element.img_src} alt={"imagem do rover" + rover} />
          </motion.li>
        ))}
      </motion.ul>
      <div ref={observer} className="boxLoading">
        {!photos.length && !loading && (
          <h2>{"Não há fotos no dia solar " + sun}</h2>
        )}
        {loading && <AiOutlineLoading3Quarters className="loading" />}
      </div>
    </StyledListPhotos>
  );
};
