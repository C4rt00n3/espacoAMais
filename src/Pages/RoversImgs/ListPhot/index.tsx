import { motion } from "framer-motion";
import { useContext, useEffect, useRef } from "react";
import { ContextRovers } from "../../../Context/ContexRovers";
import { StyledLi, StyledListPhotos } from "./styled";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface iLIstPhotos {
  ref: React.MutableRefObject<any>;
}

export const ListPhotos = ({ ref }: iLIstPhotos) => {
  const { photos, loading, setPage, checkRequest, sun } =
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
    if (observer.current && photos.length) {
      intersect.observe(observer.current);
    }
    return () => intersect.disconnect();
  }, [setPage, loading, checkRequest, photos]);

  return (
    <StyledListPhotos>
      <motion.ul ref={ref}>
        {photos.map((element, i) => (
          <StyledLi loading={element.img_src}>
            <motion.li
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="imgLi"
              key={i}
            >
              <p>{element.camera?.full_name}</p>
            </motion.li>
          </StyledLi>
        ))}
        <div ref={observer} className="boxLoading">
          {loading && <AiOutlineLoading3Quarters className="loading" />}
        </div>
        {!photos.length && !loading && (
          <h2>{"Não há fotos no dia solar " + sun}</h2>
        )}
      </motion.ul>
    </StyledListPhotos>
  );
};
