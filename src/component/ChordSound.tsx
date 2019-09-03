import React, { useEffect } from "react";
import { leftSound } from "../lib/leftSound";

const ChordSound = ({ played = [""], playing = [""] }) => {
  useEffect(() => {
    if (playing.length === 0) {
      played.forEach(value => {
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
