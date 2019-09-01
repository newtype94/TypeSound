import React, { useEffect, useState } from "react";

import "../css/Chord.css";
import { FSchordToKey } from "../config/toKeyConfig";
import { Row, Col } from "react-bootstrap";
import useKeyPress from "../hooks/useKeyPress";
import {
  FSvariationEnum,
  FSchordEnum,
  FSpatterEnum
} from "../config/chordConfig";
import { getNote } from "../utils/getNote";
import { FSinstrumentEnum } from "../config/instrumentConfig";
import ChordSound from "./ChordSound";

const inst: string = FSinstrumentEnum.acoustic_grand_piano;

const ChordPlaying = ({
  instrument = inst,
  octave = 4,
  variation = FSvariationEnum.Major,
  pattern = FSpatterEnum.parallel
}) => {
  const [chord, setChord] = useState<FSchordEnum>(FSchordEnum.C);

  const [note, setNote] = useState<string[]>(["C4", "E4", "G4"]);

  const [played, setPlayed] = useState<string[]>([]);
  const [playing, setPlaying] = useState<string[]>(["C4", "E4", "G4"]);

  const pressC = useKeyPress(FSchordToKey.C);
  const pressDb = useKeyPress(FSchordToKey.Db);
  const pressF = useKeyPress(FSchordToKey.F);

  useEffect(() => {
    if (!pressC) {
      // Key Off
      setPlaying([]);
    } else if (pressC && chord === FSchordEnum.C) {
      // Key Re-On
      setPlaying(note);
    } else {
      // Key First-On
      setChord(FSchordEnum.C);
      const gotNote = getNote(FSchordEnum.C + variation, octave);
      setNote(gotNote);
      setPlaying(gotNote);
      setPlayed(gotNote);
    }
  }, [pressC]);

  useEffect(() => {
    if (!pressF) {
      // Key Off
      setPlaying([]);
    } else if (pressF && chord === FSchordEnum.F) {
      // Key Re-On
      setPlaying(note);
    } else {
      // Key First-On
      setChord(FSchordEnum.F);
      const gotNote = getNote(FSchordEnum.F + variation, octave);
      setNote(gotNote);
      setPlaying(gotNote);
      setPlayed(gotNote);
    }
  }, [pressF]);

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
