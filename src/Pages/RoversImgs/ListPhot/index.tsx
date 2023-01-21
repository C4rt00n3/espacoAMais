import { motion } from "framer-motion";
import { useContext, useEffect, useRef } from "react";
import { ContextRovers } from "../../../Context/ContexRovers";
import { StyledLi, StyledListPhotos } from "./styled";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IPhotosItem } from "../../../Context/ContexRovers/types";
import { useNavigate } from "react-router-dom";

interface iLIstPhotos {
  setModalImg: React.Dispatch<React.SetStateAction<boolean>>;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const ListPhotos = ({ setModalImg, setIndex }: iLIstPhotos) => {
  const { photos, loading, setPage, checkRequest, sun } =
    useContext(ContextRovers);

  const observer = useRef<any>();
  const ref = useRef<any>();

  const nav = useNavigate();

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

  const modal = (i: number, element: IPhotosItem) => {
    nav(`/rover/${element.rover.name}/${element.sol}`);
    setModalImg(true);
    setIndex(i);
  };

  return (
    <StyledListPhotos>
      <motion.ul ref={ref}>
        {photos.map((element, i) => (
          <StyledLi onClick={() => modal(i, element)} loading={element.img_src}>
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
