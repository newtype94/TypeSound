import React, { useEffect } from "react";
import { leftSound } from "../lib/leftSound";

const ChordSound = ({ willStop = [""], playing = [""] }) => {
  useEffect(() => {
    if (playing.length === 0) {
      willStop.forEach(value => {
        leftSound[value].stop();
      });
    } else {
      playing.forEach(value => {
        leftSound[value].play();
      });
    }
  }, [playing]);

  return <div></div>;
};

export default ChordSound;
