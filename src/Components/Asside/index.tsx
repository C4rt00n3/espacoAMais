import { motion } from "framer-motion";
import { StyledAsideDiv, StyledAsside } from "./styled";
import { CamsList } from "./CamsList";
import { SelectRover } from "./SelectRover";
import { InputDay } from "./InputDay";
import { BoxClose } from "./BoxClose";
import { BoxLight } from "./BoxLight";
import { InputSun } from "./InputSun";
import { useContext } from "react";
import { ContextRovers } from "../../Context/ContexRovers";

interface iAside {
  close?: boolean;
}

export const Aside = ({ close }: iAside) => {
  const Width = window.screen.width;
  const { modal } = useContext(ContextRovers);

  return (
    <StyledAsideDiv modal={modal}>
      <motion.div
        initial={{ x: -Width, zIndex: 2 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="moveAside"
      >
        <StyledAsside close={close}>
          <BoxClose close={close} />
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
