import React, { useEffect, useContext } from "react";
import { leftSoundMaker } from "../lib/leftSound";
import { TSinstrumentEnum } from "../config/instrumentConfig";
import instContext from "../context/instContext";

let leftSound = leftSoundMaker(
  "/soundfont/MusyngKite/" + TSinstrumentEnum.acoustic_grand_piano + "-mp3/"
);

const ChordSound = ({ playing = [""] }) => {
  let willStop: { chord: string; id: number }[] = [];

  const { leftInst } = useContext(instContext);

  useEffect(() => {
    leftSound = leftSoundMaker("/soundfont/MusyngKite/" + leftInst + "-mp3/");
  }, [leftInst]);

  useEffect(() => {
    if (playing.length === 0) {
      willStop.forEach((v) => {
        leftSound[v.chord].stop(v.id);
      });
      willStop = [];
    } else {
      willStop.forEach((v) => {
        leftSound[v.chord].stop(v.id);
      });
      const tempStop: { chord: string; id: number }[] = [];
      playing.forEach((v) => {
        const soundId = leftSound[v].play();
        tempStop.push({ chord: v, id: soundId });
      });
      willStop = tempStop;
    }
  }, [playing]);

  return <div></div>;
};

export default ChordSound;
