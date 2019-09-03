import React, { useEffect, useState } from "react";

import "../css/Chord.css";
import { FSchordToKey } from "../config/toKeyConfig";
import { Row, Col } from "react-bootstrap";
import useKeyPress from "../hooks/useKeyPress";
import {
  FSvariationEnum,
  FSchordEnum,
  FSpatternEnum,
  FSchordVariationEnum
} from "../config/chordConfig";
import { getParallelNote, getAscNote, getDesNote } from "../utils/getNote";
import ChordSound from "./ChordSound";

const ChordPlaying = ({
  octave = 4,
  variation = FSvariationEnum.Major,
  pattern = FSpatternEnum.parallel
}) => {
  const [chord, setChord] = useState<FSchordEnum>(FSchordEnum.C);
  const [chordVariation, setChordVariation] = useState<string>(
    FSchordVariationEnum.CMajor
  );

  const [note, setNote] = useState<string[]>(["C4", "E4", "G4"]);

  const [played, setPlayed] = useState<string[]>([]);
  const [playing, setPlaying] = useState<string[]>(["C4", "E4", "G4"]);
  const [order, setOrder] = useState(0);

  const pressC = useKeyPress(FSchordToKey.C);
  const pressF = useKeyPress(FSchordToKey.F);
  const pressG = useKeyPress(FSchordToKey.G);

  const chordFirstPressed = (chord: FSchordEnum) => {
    setChord(chord);
    setChordVariation(chord + variation);
    if (pattern === FSpatternEnum.parallel) {
      const gotNote = getParallelNote(chord + variation, octave);
      setNote(gotNote);
      setPlaying(gotNote);
      setPlayed(gotNote);
    } else if (pattern === FSpatternEnum.asc) {
      const gotNote = getAscNote(chord + variation, octave);
      setNote(gotNote);
      setPlaying([gotNote[0]]);
      setPlayed([gotNote[0]]);
      setOrder(1);
    } else if (pattern === FSpatternEnum.des) {
      const gotNote = getDesNote(chord + variation, octave);
      setNote(gotNote);
      setPlaying([gotNote[0]]);
      setPlayed([gotNote[0]]);
      setOrder(1);
    }
  };

  const chordRePressed = () => {
    switch (pattern) {
      case FSpatternEnum.parallel:
        setPlaying(note);
        setPlayed(note);
        break;
      case FSpatternEnum.asc:
        setPlaying([note[order]]);
        setPlayed([note[order]]);
        if (order === note.length - 1) setOrder(0);
        else setOrder(order + 1);
        break;
      case FSpatternEnum.des:
        setPlaying([note[order]]);
        setPlayed([note[order]]);
        if (order === note.length - 1) setOrder(0);
        else setOrder(order + 1);
        break;
    }
  };

  const chordEffect = (press: boolean, chord: FSchordEnum) => {
    if (press && chordVariation !== chord + variation) {
      chordFirstPressed(chord);
    } else if (press) {
      chordRePressed();
    } else if (!press) {
      setPlaying([]);
    }
  };

  useEffect(() => {
    let gotNote: any;
    switch (pattern) {
      case FSpatternEnum.parallel:
        gotNote = getParallelNote(chord + variation, octave);
        break;
      case FSpatternEnum.asc:
        gotNote = getAscNote(FSchordEnum.C + variation, octave);
        break;
      case FSpatternEnum.des:
        gotNote = getDesNote(FSchordEnum.C + variation, octave);
        break;
    }
    setNote(gotNote);
    setOrder(0);
  }, [pattern]);

  useEffect(() => {
    chordEffect(pressC, FSchordEnum.C);
  }, [pressC]);

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
      <ChordSound played={played} playing={playing}></ChordSound>
    </Row>
  );
};

export default ChordPlaying;
