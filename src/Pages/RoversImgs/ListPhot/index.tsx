import { motion } from "framer-motion";
import { useContext, useEffect, useRef } from "react";
import { ContextRovers } from "../../../Context/ContexRovers";
import { StyledLi, StyledListPhotos } from "./styled";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IPhotosItem } from "../../../Context/ContexRovers/types";
import { useNavigate, useParams } from "react-router-dom";

interface iLIstPhotos {
  setModalImg: React.Dispatch<React.SetStateAction<boolean>>;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const ListPhotos = ({ setModalImg, setIndex }: iLIstPhotos) => {
  const { photos, loading, setPage, checkRequest, sun, camera } =
    useContext(ContextRovers);

  const { date } = useParams();

  const mensage = "Não há fotos  ";

  const observer = useRef<any>();
  const ref = useRef<any>();

  const nav = useNavigate();

  useEffect(() => {
    const intersect = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting) && checkRequest) {
        setTimeout(() => {
          setPage((e) => e + 1);
        }, 500);
      }
    });
    if (observer.current && photos.length && !loading) {
      intersect.observe(observer.current);
    }
    return () => intersect.disconnect();
  }, [setPage, loading, checkRequest, photos, date]);

  const modal = (i: number, element: IPhotosItem) => {
    nav(`/rover/${element.rover.name}/${element.sol}`);
    setModalImg(true);
    setIndex(i);
  };

  const Mensage = () => {
    if (camera !== "" && !date) {
      return "para a camera " + camera;
    } else if (!camera.length && !date) {
      return "no dia solar " + sun;
    } else if ((date && !loading && camera === "none") || "Todos") {
      return "do dia " + date + " com a camera " + camera;
    } else if (((date && camera !== "none") || "Todos") && !loading) {
      return "no dia " + date;
    }
  };

  return (
    <StyledListPhotos>
      <motion.ul ref={ref}>
        {photos.map((element, i) => (
          <StyledLi onClick={() => modal(i, element)} loading={element.img_src}>
            <motion.li
              initial={{ filter: "blur(5px)" }}
              whileInView={{ filter: "blur(0)" }}
              whileHover={{ opacity: 0.7 }}
              transition={{ repeat: 0, repeatType: "reverse", duration: 0.2 }}
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
        {!photos.length && !loading && <h2>{mensage + Mensage()}</h2>}
      </motion.ul>
    </StyledListPhotos>
  );
};
