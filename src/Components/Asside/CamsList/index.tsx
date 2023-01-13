import { motion } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import { unique } from "../../../App";
import { ContextRovers } from "../../../Context/ContexRovers";
import { StyledCamsList, StyledLi } from "./styled";

export const CamsList = () => {
  const carousel = useRef<any>();
  const { rover, modal } = useContext(ContextRovers);

  const [height, setHeight] = useState(0);

  function camsRovers() {
    let uniqueUse = unique;

    if (rover === "Curiosity") {
      const rovers = [
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
    return uniqueUse;
  }

  useEffect(() => {
    setHeight(
      carousel.current?.scrollHeight - carousel.current?.offsetHeight + 50
    );
    console.log(carousel.current?.scrollHeight, carousel.current?.offsetHeight);
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
              <motion.li key={i}>
                <p>{element.name}</p>
              </motion.li>
            </StyledLi>
          ))}
        </motion.ul>
      </motion.div>
    </StyledCamsList>
  );
};
