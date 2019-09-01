import React, { useEffect, useState } from "react";

import { Howl } from "howler";
import { FSchordArray } from "../config/chordConfig";

const ChordPlaying = ({
  instrument = "acoustic_grand_piano-mp3",
  pressed = [""]
}) => {
  const src = "/soundfont/MusyngKite/" + instrument + "/";

  //Create Sound Model
  let sound: { [key: string]: Howl } = {};
  FSchordArray.forEach(value => {
    for (let octave = 0; octave < 8; octave++) {
      sound[value + octave] = new Howl({
        src: [src + value + octave + ".mp3"],
        autoplay: false
      });
    }
  });

  const [playing, setPlaying] = useState<string[]>([]);

  useEffect(() => {
    //stop which is now-playing
    playing.forEach(value => {
      sound[value].stop();
    });
    setPlaying(pressed);
  }, [pressed]);

  useEffect(() => {
    playing.forEach(value => {
      sound[value].play();
    });
  }, [playing]);

  return <div></div>;
};

export default ChordPlaying;
