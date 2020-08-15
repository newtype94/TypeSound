import { createContext } from "react";
import { TSinstrumentEnum } from "../config/instrumentConfig";

const instContext = createContext({
  rightInst: TSinstrumentEnum.acoustic_grand_piano,
  leftInst: TSinstrumentEnum.acoustic_grand_piano,
  setRightInst: (s: TSinstrumentEnum) => {},
  setLeftInst: (s: TSinstrumentEnum) => {},
});

export default instContext;
