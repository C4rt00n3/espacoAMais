import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import { useContext, useEffect, useRef, useState } from "react";
import { ContextRovers } from "../../Context/ContexRovers";
import { StyledCarousel, StyledSwiperImagem } from "./styled";
import img from "../../Assets/Imgs/Loading_icon.gif";
import { AiFillCloseCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";

interface iCarousel {
  setModalImg: React.Dispatch<React.SetStateAction<boolean>>;
  i: number;
}

export const Carousel = ({ setModalImg, i }: iCarousel) => {
  const { photos, setPage } = useContext(ContextRovers);
  const [modify, setModify] = useState(0);

  const observer = useRef<any>();

  const { sol, rovers } = useParams();
  const nav = useNavigate();

  const itens1 = photos.slice(0, i + 1);
  const itens2 = photos.slice(0, photos.length - i);

  const newPhotos = [...itens1.reverse(), ...itens2].reverse();

  const close = () => {
    setModalImg(false);
    nav(`/rover/${rovers ? rovers : ""}/${Number(sol) > 0 ? sol : 0}`);
  };

  useEffect(() => {
    const intersect = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setTimeout(() => {
          setPage((pageInsedeState) => pageInsedeState + 1);
        }, 500);
      }
    });
    if (observer.current && photos.length) {
      intersect.observe(observer.current);
      console.log("oiii");
    }
    return () => intersect.disconnect();
  }, [setPage, photos]);

  return (
    <StyledCarousel imagem={img}>
      <div onClick={() => close()} className="usr"></div>
      <Swiper
        onSlideChange={() => setModify(modify + 1)}
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <button onClick={() => close()}>
          <AiFillCloseCircle />
        </button>
        {newPhotos.reverse().map((element, i, arr) =>
          i === arr.length - 10 ? (
            <SwiperSlide key={i}>
              <StyledSwiperImagem imagem={element.img_src}>
                <motion.div
                  ref={observer}
                  id={i + ""}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="moveCarousel"
                ></motion.div>
              </StyledSwiperImagem>
            </SwiperSlide>
          ) : (
            <SwiperSlide key={i}>
              <StyledSwiperImagem imagem={element.img_src}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="moveCarousel"
                ></motion.div>
              </StyledSwiperImagem>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </StyledCarousel>
  );
};
