import React, { useEffect } from "react";

import { Howl } from "howler";
import { FSinstrumentEnum } from "../config/instrumentConfig";
import { leftSound } from "../lib/leftSound";

const inst: string = FSinstrumentEnum.acoustic_grand_piano;
const src = "/soundfont/MusyngKite/" + inst + "-mp3/";

const ChordSound = ({ instrument = inst, played = [""], playing = [""] }) => {
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
