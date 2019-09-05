import React, { useEffect, useState } from "react";

import "../css/Chord.css";
import { TSchordToKey } from "../config/toKeyConfig";
import { Row, Col } from "react-bootstrap";
import useKeyPress from "../hooks/useKeyPress";
import {
  TSvariationEnum,
  TSchordEnum,
  TSpatternEnum,
  TSchordVariationEnum
} from "../config/chordConfig";
import { getNote } from "../utils/getNote";
import ChordSound from "./ChordSound";
import {
  FaRegWindowMinimize,
  FaChevronDown,
  FaChevronUp,
  FaArrowRight,
  FaArrowDown
} from "react-icons/fa";

const ChordPlaying = ({
  octave = 4,
  variation = TSvariationEnum.Major,
  pattern = TSpatternEnum.parallel
}) => {
  const [chord, setChord] = useState<TSchordEnum>(TSchordEnum.C);
  const [chordVariation, setChordVariation] = useState<string>(
    TSchordVariationEnum.CMajor
  );

  const [note, setNote] = useState<string[]>(["C4", "E4", "G4"]);

  const [playing, setPlaying] = useState<string[]>(["C4", "E4", "G4"]);
  const [order, setOrder] = useState(0);

  const pressC = useKeyPress(TSchordToKey.C);
  const pressDb = useKeyPress(TSchordToKey.Db);
  const pressD = useKeyPress(TSchordToKey.D);
  const pressEb = useKeyPress(TSchordToKey.Eb);
  const pressE = useKeyPress(TSchordToKey.E);
  const pressF = useKeyPress(TSchordToKey.F);
  const pressGb = useKeyPress(TSchordToKey.Gb);
  const pressG = useKeyPress(TSchordToKey.G);
  const pressAb = useKeyPress(TSchordToKey.Ab);
  const pressA = useKeyPress(TSchordToKey.A);
  const pressBb = useKeyPress(TSchordToKey.Bb);
  const pressB = useKeyPress(TSchordToKey.B);

  const chordFirstPressed = (chord: TSchordEnum) => {
    setChord(chord);
    setChordVariation(chord + variation);
    if (pattern === TSpatternEnum.parallel) {
      const gotNote = getNote(
        chord + variation,
        octave,
        TSpatternEnum.parallel
      );
      setNote(gotNote);
      setPlaying(gotNote);
    } else if (pattern === TSpatternEnum.asc) {
      const gotNote = getNote(chord + variation, octave, TSpatternEnum.asc);
      setNote(gotNote);
      setPlaying([gotNote[0]]);
      setOrder(1);
    } else if (pattern === TSpatternEnum.des) {
      const gotNote = getNote(chord + variation, octave, TSpatternEnum.des);
      setNote(gotNote);
      setPlaying([gotNote[0]]);
      setOrder(1);
    }
  };

  const chordRePressed = () => {
    switch (pattern) {
      case TSpatternEnum.parallel:
        setPlaying(note);
        break;
      case TSpatternEnum.asc:
        setPlaying([note[order]]);
        if (order === note.length - 1) setOrder(0);
        else setOrder(order + 1);
        break;
      case TSpatternEnum.des:
        setPlaying([note[order]]);
        if (order === note.length - 1) setOrder(0);
        else setOrder(order + 1);
        break;
    }
  };

  const chordEffect = (press: boolean, chord: TSchordEnum) => {
    if (press && chordVariation !== chord + variation) {
      chordFirstPressed(chord);
    } else if (press) {
      chordRePressed();
    } else if (!press) {
      setPlaying([]);
    }
  };

  useEffect(() => {
    setNote(getNote(chord + variation, octave, pattern));
    setOrder(0);
  }, [pattern]);

  useEffect(() => {
    setNote(getNote(chord + variation, octave, pattern));
    setOrder(0);
  }, [octave]);

  useEffect(() => {
    chordEffect(pressC, TSchordEnum.C);
  }, [pressC]);
  useEffect(() => {
    chordEffect(pressDb, TSchordEnum.Db);
  }, [pressDb]);
  useEffect(() => {
    chordEffect(pressD, TSchordEnum.D);
  }, [pressD]);
  useEffect(() => {
    chordEffect(pressEb, TSchordEnum.Eb);
  }, [pressEb]);
  useEffect(() => {
    chordEffect(pressE, TSchordEnum.E);
  }, [pressE]);
  useEffect(() => {
    chordEffect(pressF, TSchordEnum.F);
  }, [pressF]);
  useEffect(() => {
    chordEffect(pressGb, TSchordEnum.Gb);
  }, [pressGb]);
  useEffect(() => {
    chordEffect(pressG, TSchordEnum.G);
  }, [pressG]);
  useEffect(() => {
    chordEffect(pressAb, TSchordEnum.Ab);
  }, [pressAb]);
  useEffect(() => {
    chordEffect(pressA, TSchordEnum.A);
  }, [pressA]);
  useEffect(() => {
    chordEffect(pressBb, TSchordEnum.Bb);
  }, [pressBb]);
  useEffect(() => {
    chordEffect(pressB, TSchordEnum.B);
  }, [pressB]);

  return (
    <Row>
      <Col md={6} xs={12} className="mt-3">
        <div className="leftBox">
          {octave}&nbsp;Octave
          <br />
          {chord}&nbsp;
          {variation}
          <br></br>
          {pattern === TSpatternEnum.parallel && (
            <FaRegWindowMinimize></FaRegWindowMinimize>
          )}
          {pattern === TSpatternEnum.asc && <FaChevronUp></FaChevronUp>}
          {pattern === TSpatternEnum.des && <FaChevronDown></FaChevronDown>}
          <br></br>
        </div>
      </Col>
      <Col md={6} xs={12} className="mt-3">
        <div className="rightBox">
          {note.map(value => {
            return value + " ";
          })}
          <br></br>
          <FaArrowDown></FaArrowDown>
          <br></br>
          {playing.map(value => {
            return value + " ";
          })}
        </div>
      </Col>
      <ChordSound playing={playing}></ChordSound>
    </Row>
  );
};

export default ChordPlaying;
