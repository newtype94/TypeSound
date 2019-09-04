import React, { useEffect, useState } from "react";

import "../css/Chord.css";
import {
  TSchordToKey,
  TSvariationTokey,
  TSpatternTokey
} from "../config/toKeyConfig";
import useKeyPress from "../hooks/useKeyPress";
import {
  TSvariationEnum,
  TSvariationArray,
  TSpatternEnum
} from "../config/chordConfig";
import ChordPlaying from "./ChordPlaying";

const Chord = () => {
  const [octave, setOctave] = useState(4);
  const [pattern, setPattern] = useState<TSpatternEnum>(TSpatternEnum.parallel);
  const [variation, setVariation] = useState<TSvariationEnum>(
    TSvariationEnum.Major
  );

  const octaveUp = useKeyPress(TSchordToKey.OctaveUp);
  const octaveDown = useKeyPress(TSchordToKey.OctaveDown);
  const patternParallel = useKeyPress(TSpatternTokey.parallel);
  const patternAsc = useKeyPress(TSpatternTokey.asc);
  const patternDes = useKeyPress(TSpatternTokey.des);

  const variationPressed = [
    useKeyPress(TSvariationTokey.Major),
    useKeyPress(TSvariationTokey.m),
    useKeyPress(TSvariationTokey.msix),
    useKeyPress(TSvariationTokey.mseven),
    useKeyPress(TSvariationTokey.aug),
    useKeyPress(TSvariationTokey.dim),
    useKeyPress(TSvariationTokey.two),
    useKeyPress(TSvariationTokey.six),
    useKeyPress(TSvariationTokey.seven),
    useKeyPress(TSvariationTokey.sustwo),
    useKeyPress(TSvariationTokey.susfour)
  ];

  useEffect(() => {
    if (octaveUp && octave < 7) {
      setOctave(octave + 1);
    } else if (octaveDown && octave > 0) {
      setOctave(octave - 1);
    }
  }, [octaveUp, octaveDown]);

  useEffect(() => {
    if (patternParallel) {
      setPattern(TSpatternEnum.parallel);
    } else if (patternAsc) {
      setPattern(TSpatternEnum.asc);
    } else if (patternDes) {
      setPattern(TSpatternEnum.des);
    }
  }, [patternParallel, patternAsc, patternDes]);

  useEffect(() => {
    for (let i = 0; i < variationPressed.length; i++) {
      if (variationPressed[i]) {
        setVariation(TSvariationArray[i]);
      }
    }
  }, [variationPressed]);

  return (
    <ChordPlaying
      octave={octave}
      variation={variation}
      pattern={pattern}
    ></ChordPlaying>
  );
};

export default Chord;
