import React, { useEffect, useState } from "react";

import { Howl } from "howler";
import { FSchordArray } from "../config/chordConfig";

const ChordPlaying = ({
  instrument = "acoustic_grand_piano-mp3",
  octave = 4,
  C = false
}) => {
  const src = "/soundfont/MusyngKite/" + instrument + "/";
  let sound: { [key: string]: Howl } = {};

  FSchordArray.forEach(value => {
    for (let oct = 0; oct < 8; oct++) {
      sound[value + oct] = new Howl({
        src: [src + value + octave + ".mp3"],
        autoplay: false
      });
    }
  });

  useEffect(() => {
    if (C) {
      sound["C" + octave].play();
    } else {
      sound["C" + octave].mute();
    }
  }, [C]);

  return <div></div>;
};

export default ChordPlaying;
