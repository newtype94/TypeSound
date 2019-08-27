import React, { useEffect, useState } from "react";
import "../css/Chord.css";
import { Howl } from "howler";
import { chordToKey, variationTokey } from "../config/toKeyConfig";
import { Row, Col } from "react-bootstrap";
import useKeyPress from "../hooks/useKeyPress";
import {
  variationEnum,
  chordVariationEnum,
  chordEnum,
  chordArray,
  variationArray
} from "../config/chordConfig";
import { chordMake } from "music-chord";
import { chordGet } from "chord-symbol";

const Chord = ({ instrument = "acoustic_grand_piano-mp3" }) => {
  const src = "/soundfont/MusyngKite/" + instrument + "/";
  const [octave, setOctave] = useState(4);
  const [chord, setChord] = useState(chordEnum.C);
  const [variation, setVariation] = useState(variationEnum.Major);
  const [chordVariation, setChordVariation] = useState("insert Code");
  console.log(JSON.stringify(chordGet(chord, variation)));
  console.log(chordMake(variation, chord));

  const octaveUp = useKeyPress(chordToKey.OctaveUp);
  const octaveDown = useKeyPress(chordToKey.OctaveDown);

  const chordHooks = [
    useKeyPress(chordToKey.C),
    useKeyPress(chordToKey.D),
    useKeyPress(chordToKey.E),
    useKeyPress(chordToKey.F),
    useKeyPress(chordToKey.G),
    useKeyPress(chordToKey.A),
    useKeyPress(chordToKey.B),
    useKeyPress(chordToKey.Db),
    useKeyPress(chordToKey.Eb),
    useKeyPress(chordToKey.Ab),
    useKeyPress(chordToKey.Bb)
  ];

  const variationHooks = [
    useKeyPress(variationTokey.plain),
    useKeyPress(variationTokey.m),
    useKeyPress(variationTokey.seven),
    useKeyPress(variationTokey.susfour),
    useKeyPress(variationTokey.sharp),
    useKeyPress(variationTokey.dim)
  ];

  const makechordVariation = () => {};

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
        setChord(chordArray[i]);
      }
    }
  }, [chordHooks]);

  useEffect(() => {
    for (let i = 0; i < variationHooks.length; i++) {
      if (variationHooks[i]) {
        setVariation(variationArray[i]);
      }
    }
  }, [variationHooks]);

  return (
    <Row>
      <Col xs={4} className="octave">
        octave : {octave}
      </Col>
      <Col xs={4} className="octave">
        {chordVariation}
      </Col>
      <Col xs={4} className="octave">
        {chord}+{variation}
      </Col>
    </Row>
  );
};

export default Chord;
