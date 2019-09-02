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
import { FSinstrumentEnum } from "../config/instrumentConfig";
import ChordSound from "./ChordSound";

const inst: string = FSinstrumentEnum.acoustic_grand_piano;

const ChordPlaying = ({
  instrument = inst,
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

  useEffect(() => {
    if (!pressC) {
      // Key Off
      setPlaying([]);
    } else if (pressC && chordVariation === FSchordEnum.C + variation) {
      // Key Re-On
      if (pattern === FSpatternEnum.parallel) {
        setPlaying(note);
        setPlayed(note);
      } else if (pattern === FSpatternEnum.asc) {
        console.log(note);
        setPlaying([note[order]]);
        setPlayed([note[order]]);
        if (order === note.length - 1) setOrder(0);
        else setOrder(order + 1);
      } else if (pattern === FSpatternEnum.des) {
      }
    } else {
      // Key First-On
      console.log(FSchordEnum.C + variation);
      setChord(FSchordEnum.C);
      setChordVariation(FSchordEnum.C + variation);
      if (pattern === FSpatternEnum.parallel) {
        const gotNote = getParallelNote(FSchordEnum.C + variation, octave);
        setNote(gotNote);
        setPlaying(gotNote);
        setPlayed(gotNote);
      } else if (pattern === FSpatternEnum.asc) {
        const gotNote = getAscNote(FSchordEnum.C + variation, octave);
        setNote(gotNote);
        setPlaying([gotNote[0]]);
        setPlayed([gotNote[0]]);
        setOrder(1);
      } else if (pattern === FSpatternEnum.des) {
        const gotNote = getDesNote(FSchordEnum.C + variation, octave);
        setNote(gotNote);
        setOrder(gotNote.length - 1);
      }
    }
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
      <ChordSound
        instrument={instrument}
        played={played}
        playing={playing}
      ></ChordSound>
    </Row>
  );
};

export default ChordPlaying;
