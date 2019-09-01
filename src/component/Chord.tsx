import React, { useEffect, useState } from "react";

import "../css/Chord.css";
import { FSchordToKey, FSvariationTokey } from "../config/toKeyConfig";
import useKeyPress from "../hooks/useKeyPress";
import {
  FSvariationEnum,
  FSvariationArray,
  FSpatterEnum
} from "../config/chordConfig";
import ChordPlaying from "./ChordPlaying";
import { FSinstrumentEnum } from "../config/instrumentConfig";

const inst: string = FSinstrumentEnum.acoustic_grand_piano;

const Chord = ({ instrument = inst }) => {
  const [octave, setOctave] = useState(4);
  const [variation, setVariation] = useState<FSvariationEnum>(
    FSvariationEnum.Major
  );
  const [pattern, setPattern] = useState<FSpatterEnum>(FSpatterEnum.parallel);

  const octaveUp = useKeyPress(FSchordToKey.OctaveUp);
  const octaveDown = useKeyPress(FSchordToKey.OctaveDown);

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
    }
    if (octaveDown && octave > 0) {
      setOctave(octave - 1);
    }
  }, [octaveUp, octaveDown]);

  useEffect(() => {
    for (let i = 0; i < variationPressed.length; i++) {
      if (variationPressed[i]) {
        setVariation(FSvariationArray[i]);
      }
    }
  }, [variationPressed]);

  return (
    <ChordPlaying
      instrument={instrument}
      octave={octave}
      variation={variation}
      pattern={pattern}
    ></ChordPlaying>
  );
};

export default Chord;
