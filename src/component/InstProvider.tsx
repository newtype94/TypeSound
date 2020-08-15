import React, { useState } from "react";
import instContext from "../context/instContext";
import { TSinstrumentEnum } from "../config/instrumentConfig";

const InstProvider = ({ children = <div></div> }) => {
  const setRightInst = (rightInst: TSinstrumentEnum) => {
    setProvider((prevState) => {
      return {
        ...prevState,
        rightInst,
      };
    });
  };

  const setLeftInst = (leftInst: TSinstrumentEnum) => {
    setProvider((prevState) => {
      return {
        ...prevState,
        leftInst,
      };
    });
  };

  const initialState = {
    rightInst: TSinstrumentEnum.acoustic_grand_piano,
    leftInst: TSinstrumentEnum.acoustic_grand_piano,
    setRightInst,
    setLeftInst,
  };
  const [provider, setProvider] = useState(initialState);

  return (
    <instContext.Provider value={provider}>{children}</instContext.Provider>
  );
};

export default InstProvider;
