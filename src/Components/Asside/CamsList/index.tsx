import { motion } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { unique } from "../../../App";
import { ContextRovers } from "../../../Context/ContexRovers";
import { StyledCamsList, StyledLi } from "./styled";

export const CamsList = () => {
  const carousel = useRef<any>();
  const { rover, modal, setCamera, setCams, setPhotos, setCheckRequest, sun } =
    useContext(ContextRovers);

  const { sol, rovers, date } = useParams();
  const nav = useNavigate();

  const { camera } = useContext(ContextRovers);

  const [height, setHeight] = useState(0);

  function camsRovers() {
    const u = unique.filter((element, i) =>
      element.sigla === camera ? (element.list = true) : (element.list = false)
    );
    const ua = unique.filter((element, i) => element.sigla !== camera);

    ua.splice(1, 0, u[0]);

    let uniqueUse = ua;

    if (rover === "Curiosity") {
      const rovers = [
        "Todos",
        "Navigation Camera",
        "Mars Descent Imager",
        "Mars Hand Lens Imager",
        "Chemistry and Camera Complex",
        "Mast Camera",
        "Rear Hazard Avoidance Camera",
        "Front Hazard Avoidance Camera",
      ];
      const listCams = unique.filter(
        (element) => rovers.some((e) => e === element.name) && element
      );

      uniqueUse = listCams;
    }
    if (rover === "Opportunity" || rover === "Spirit") {
      const rovers = [
        "Todos",
        "Rear Hazard Avoidance Camera",
        "Front Hazard Avoidance Camera",
        "Miniature Thermal Emission Spectrometer (Mini-TES)",
        "Panoramic Camera",
        "Navigation Camera",
      ];

      const listCams = unique.filter(
        (element) => rovers.some((e) => e === element.name) && element
      );

      uniqueUse = listCams;
    } else if (rover === "Perseverance") {
      const rovers = [
        "Todos",
        "Rover Up-Look Camera",
        "Rover Down-Look Camera",
        "Descent Stage Down-Look Camera",
        "Parachute Up-Look Camera A",
        "Parachute Up-Look Camera B",
        "Navigation Camera - Left",
        "Navigation Camera - Right ",
        "Mast Camera Zoom - Right",
        "Mast Camera Zoom - Left",
        "Front Hazard Avoidance Camera - Left",
        "Front Hazard Avoidance Camera - Right",
        "Rear Hazard Avoidance Camera - Left",
        "Rear Hazard Avoidance Camera - Right",
        "MEDA Skycam",
        "SHERLOC WATSON Camera ",
      ];

      const listCams = unique.filter(
        (element) => rovers.some((e) => e === element.name) && element
      );
      uniqueUse = listCams;
    }

    const t = unique.some((e) => e.list === true);

    uniqueUse.filter((element) => {
      if (!t && element.sigla === "Todos") {
        element.list = true;
      }
      return element;
    });

    return uniqueUse;
  }

  function selectCam(element: { name: string; list: boolean; sigla: string }) {
    unique.map((element) => (element.list = false));
    const newUnique = unique.map((iten) => {
      if (iten.name === element.name) {
        iten.list = true;
      }
      return iten;
    });

    if (element.name !== "Todos") {
      setCheckRequest(false);
      nav(`/rover/${rovers}/${sol}/${element.sigla}/${date}`);
    } else {
      setCheckRequest(true);
    }
    setPhotos([]);
    setCams(newUnique);
    setCamera(element.sigla === "Todos" ? "" : element.sigla);
    nav(
      `/rover/${rover}/${sun < 0 ? 0 : sun}${
        element.sigla !== "Todos" ? "/" + element.sigla : ""
      }${date ? "/" + date : ""}`
    );
  }

  useEffect(() => {
    setHeight(
      carousel.current?.scrollHeight - carousel.current?.offsetHeight + 50
    );
  }, [modal, rover]);

  const camsRover = camsRovers();

  return (
    <StyledCamsList>
      <motion.div
        ref={carousel}
        whileTap={{ cursor: "grabbing" }}
        className="carousel"
      >
        <motion.ul
          drag="y"
          dragConstraints={{ top: -height, bottom: 0 }}
          className="inner"
        >
          {camsRover.map((element, i) => (
            <StyledLi
              width={element.name.length % 2 === 0 ? "120px" : "100px"}
              key={i}
            >
              <button onClick={() => selectCam(element)}>
                <motion.li
                  className={element.list ? "backgroundBlue" : ""}
                  key={i}
                >
                  <p className={element.list ? "text_cam" : "text_cam_simples"}>
                    {element.name}
                  </p>
                </motion.li>
              </button>
            </StyledLi>
          ))}
        </motion.ul>
      </motion.div>
    </StyledCamsList>
  );
};
