import { motion } from "framer-motion";
import { StyledAsideDiv, StyledAsside } from "./styled";
import { CamsList } from "./CamsList";
import { SelectRover } from "./SelectRover";
import { InputDay } from "./InputDay";
import { BoxClose } from "./BoxClose";
import { BoxLight } from "./BoxLight";
import { InputSun } from "./InputSun";
import { useContext, useState } from "react";
import { ContextRovers } from "../../Context/ContexRovers";

interface iAside {
  close?: boolean;
}

export const Aside = ({ close }: iAside) => {
  const { modal } = useContext(ContextRovers);
  const [width, setWidth] = useState(window.screen.width);
  const [zero, setZero] = useState(0);

  return (
    <StyledAsideDiv className="ident" modal={modal}>
      <motion.div
        initial={{ x: -width }}
        animate={{ x: zero }}
        transition={{ duration: 0.5 }}
        className="moveAside"
      >
        <StyledAsside className="ttt" modal={modal} close={close}>
          <BoxClose width={width} setZero={setZero} setWidth={setWidth} />
          <InputSun />
          <InputDay />
          <CamsList />
          <SelectRover />
          <BoxLight />
        </StyledAsside>
      </motion.div>
    </StyledAsideDiv>
  );
};
