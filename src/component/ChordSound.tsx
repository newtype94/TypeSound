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
      const tempStop: { chord: string; id: number }[] = [];
      playing.forEach(value => {
        const soundId = leftSound[value].play();
        tempStop.push({ chord: value, id: soundId });
      });
      setWillStop(tempStop);
    }
  }, [playing]);

  return <div></div>;
};

export default ChordSound;
