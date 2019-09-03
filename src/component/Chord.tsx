import React, { useEffect, useState } from "react";

import "../css/Chord.css";
import {
  FSchordToKey,
  FSvariationTokey,
  FSpatternTokey
} from "../config/toKeyConfig";
import useKeyPress from "../hooks/useKeyPress";
import {
  FSvariationEnum,
  FSvariationArray,
  FSpatternEnum
} from "../config/chordConfig";
import ChordPlaying from "./ChordPlaying";

const Chord = () => {
  const [octave, setOctave] = useState(4);
  const [pattern, setPattern] = useState<FSpatternEnum>(FSpatternEnum.parallel);
  const [variation, setVariation] = useState<FSvariationEnum>(
    FSvariationEnum.Major
  );

  const octaveUp = useKeyPress(FSchordToKey.OctaveUp);
  const octaveDown = useKeyPress(FSchordToKey.OctaveDown);
  const patternParallel = useKeyPress(FSpatternTokey.parallel);
  const patternAsc = useKeyPress(FSpatternTokey.asc);
  const patternDes = useKeyPress(FSpatternTokey.des);

  const variationPressed = [
    useKeyPress(FSvariationTokey.Major),
    useKeyPress(FSvariationTokey.m),
    useKeyPress(FSvariationTokey.msix),
    useKeyPress(FSvariationTokey.mseven),
    useKeyPress(FSvariationTokey.aug),
    useKeyPress(FSvariationTokey.dim),
    useKeyPress(FSvariationTokey.two),
    useKeyPress(FSvariationTokey.six),
    useKeyPress(FSvariationTokey.seven),
    useKeyPress(FSvariationTokey.sustwo),
    useKeyPress(FSvariationTokey.susfour)
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
      setPattern(FSpatternEnum.parallel);
    } else if (patternAsc) {
      setPattern(FSpatternEnum.asc);
    } else if (patternDes) {
      setPattern(FSpatternEnum.des);
    }
  }, [patternParallel, patternAsc, patternDes]);

  useEffect(() => {
    for (let i = 0; i < variationPressed.length; i++) {
      if (variationPressed[i]) {
        setVariation(FSvariationArray[i]);
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
