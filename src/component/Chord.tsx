import React, { useEffect, useState } from "react";

import "../css/Chord.css";
import { Howl } from "howler";
import { FSchordToKey, FSvariationTokey } from "../config/toKeyConfig";
import { Row, Col } from "react-bootstrap";
import useKeyPress from "../hooks/useKeyPress";
import {
  FSvariationEnum,
  FSchordEnum,
  FSchordArray,
  FSvariationArray,
  FSpatterEnum,
  FSchordVariationEnum
} from "../config/chordConfig";
import { FSfullKeyEnum } from "../config/pianoConfig";
import { chordNotes } from "./../lib/chordNotes";
import ChordPlaying from "./ChordPlaying";

const Chord = ({ instrument = "acoustic_grand_piano-mp3" }) => {
  const src = "/soundfont/MusyngKite/" + instrument + "/";
  const [octave, setOctave] = useState(4);
  const [chord, setChord] = useState<FSchordEnum>(FSchordEnum.C);
  const [variation, setVariation] = useState<FSvariationEnum>(
    FSvariationEnum.Major
  );
  const [note, setNote] = useState<FSfullKeyEnum[]>();
  const [pattern, setPattern] = useState<FSpatterEnum>(FSpatterEnum.parallel);

  const octaveUp = useKeyPress(FSchordToKey.OctaveUp);
  const octaveDown = useKeyPress(FSchordToKey.OctaveDown);

  const chordHooks = [
    useKeyPress(FSchordToKey.C),
    useKeyPress(FSchordToKey.Db),
    useKeyPress(FSchordToKey.D),
    useKeyPress(FSchordToKey.Eb),
    useKeyPress(FSchordToKey.E),
    useKeyPress(FSchordToKey.F),
    useKeyPress(FSchordToKey.Gb),
    useKeyPress(FSchordToKey.G),
    useKeyPress(FSchordToKey.Ab),
    useKeyPress(FSchordToKey.A),
    useKeyPress(FSchordToKey.Bb),
    useKeyPress(FSchordToKey.B)
  ];

  const variationHooks = [
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
    for (let i = 0; i < chordHooks.length; i++) {
      if (chordHooks[i]) {
        setChord(FSchordArray[i]);
      }
    }
  }, [chordHooks]);

  useEffect(() => {
    for (let i = 0; i < variationHooks.length; i++) {
      if (variationHooks[i]) {
        setVariation(FSvariationArray[i]);
      }
    }
  }, [variationHooks]);

  useEffect(() => {
    const abb = chord + variation;
    console.log(chordNotes[abb]);
  }, [chord]);

  return (
    <Row className="mt-4">
      <Col xs={6}>
        <div className="box">
          {octave}&nbsp;Octave
          <br />
          {chord}&nbsp;
          {variation}
        </div>
      </Col>
      <Col xs={6}>
        <div className="box">{pattern}</div>
      </Col>
      <ChordPlaying
        instrument={instrument}
        octave={octave}
        C={useKeyPress(FSchordToKey.C)}
      ></ChordPlaying>
    </Row>
  );
};

export default Chord;
