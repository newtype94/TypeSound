import React, { useEffect } from "react";

import { Howl } from "howler";
import { FSinstrumentEnum } from "../config/instrumentConfig";

const inst: string = FSinstrumentEnum.acoustic_grand_piano;

const ChordSound = ({ instrument = inst, played = [""], playing = [""] }) => {
  const src = "/soundfont/MusyngKite/" + instrument + "-mp3/";

  //Create Sound Model
  const sound: { [key: string]: Howl } = {
    C4: new Howl({
      src: [src + "C4.mp3"]
    }),
    D4: new Howl({
      src: [src + "D4.mp3"]
    }),
    E4: new Howl({
      src: [src + "E4.mp3"]
    }),
    F4: new Howl({
      src: [src + "F4.mp3"]
    }),
    G4: new Howl({
      src: [src + "G4.mp3"]
    }),
    A4: new Howl({
      src: [src + "A4.mp3"]
    }),
    B4: new Howl({
      src: [src + "B4.mp3"]
    }),
    C5: new Howl({
      src: [src + "C5.mp3"]
    })
  };

  useEffect(() => {
    if (playing.length === 0) {
      played.forEach(value => {
        sound[value].stop();
      });
    } else {
      playing.forEach(value => {
        sound[value].play();
      });
    }
  }, [playing]);

  return <div></div>;
};

export default ChordSound;
