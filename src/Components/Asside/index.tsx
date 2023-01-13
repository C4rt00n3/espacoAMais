import { motion } from "framer-motion";
import { StyledAsside } from "./styled";
import { AiFillCloseCircle } from "react-icons/ai";
import { CamsList } from "./CamsList";
import { BsSunFill } from "react-icons/bs";

interface iAside {
  close?: boolean;
}

const ArrayRover = ["Curiosity", "Opportunity", "Spirit", "Perseverance"];

export const Aside = ({ close }: iAside) => {
  const Width = window.screen.width;

  const rover: string = "Perseverence";
  return (
    <motion.div
      initial={{ x: -Width }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
      className="moveAside"
    >
      <StyledAsside>
        <div className="boxClose">
          <h3 className="subTitleFilter">Filtro</h3>

          {close && (
            <button>
              <AiFillCloseCircle />
            </button>
          )}
        </div>

        <div className="inputSol">
          <h4 className="subTitleSol">Sol :</h4>
          <div className="inputBox">
            <button className="sub">-</button>
            <input placeholder="0000" type="number" />
            <button className="sum">+</button>
          </div>
        </div>
        <div className="inputDay">
          <h4 className="subTitleSol">Dia Terrestre</h4>
          <input type="date" />
        </div>
        <CamsList />

        <div className="divRover">
          <h4 className="subTitleSol">Rover</h4>
          <select name="Rovers" id="">
            <option className="hidden" value={rover}>
              {rover}
            </option>
            {ArrayRover.map((element, i) => (
              <option value={element} key={i}>
                {element}
              </option>
            ))}
          </select>
        </div>

        <div className="boxLight">
          <button>
            <BsSunFill />
          </button>
        </div>
      </StyledAsside>
    </motion.div>
  );
};
