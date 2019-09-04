import React, { useEffect, useState } from "react";
import { leftSound } from "../lib/leftSound";

const ChordSound = ({ playing = [""] }) => {
  const [willStop, setWillStop] = useState<{ chord: string; id: number }[]>([]);
  useEffect(() => {
    if (playing.length === 0) {
      willStop.forEach(value => {
        leftSound[value.chord].stop(value.id);
      });
      setWillStop([]);
    } else {
      willStop.forEach(value => {
        leftSound[value.chord].stop(value.id);
      });
      setWillStop([]);
      playing.forEach(value => {
        const soundId = leftSound[value].play();
        willStop.push({ chord: value, id: soundId });
      });
    }
  }, [playing]);

  return <div></div>;
};

export default ChordSound;
