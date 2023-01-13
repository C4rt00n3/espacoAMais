import { motion } from "framer-motion";
import { StyledAsside } from "./styled";
import { CamsList } from "./CamsList";
import { SelectRover } from "./SelectRover";
import { InputDay } from "./InputDay";
import { BoxClose } from "./BoxClose";
import { BoxLight } from "./BoxLight";
import { InputSun } from "./InputSun";

interface iAside {
  close?: boolean;
}

export const Aside = ({ close }: iAside) => {
  const Width = window.screen.width;

  return (
    <motion.div
      initial={{ x: -Width }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
      className="moveAside"
    >
      <StyledAsside>
        <BoxClose close={true} />
        <InputSun />
        <InputDay />
        <CamsList />
        <SelectRover />
        <BoxLight />
      </StyledAsside>
    </motion.div>
  );
};
