import React, { useEffect, useState } from "react";

import "../css/Piano.css";
import { TSpianoToKey } from "../config/toKeyConfig";
import useKeyPress from "../hooks/useKeyPress";
import { Row, Col } from "react-bootstrap";
import { TSchordEnum } from "../config/chordConfig";
import { rightSound } from "../lib/rightSound";

const Piano = () => {
  const [octave, setOctave] = useState(4);

  const octaveUp = useKeyPress(TSpianoToKey.OctaveUp);
  const octaveDown = useKeyPress(TSpianoToKey.OctaveDown);

  const pressC = useKeyPress(TSpianoToKey.C);
  const pressDb = useKeyPress(TSpianoToKey.Db);
  const pressD = useKeyPress(TSpianoToKey.D);
  const pressEb = useKeyPress(TSpianoToKey.Eb);
  const pressE = useKeyPress(TSpianoToKey.E);
  const pressF = useKeyPress(TSpianoToKey.F);
  const pressGb = useKeyPress(TSpianoToKey.Gb);
  const pressG = useKeyPress(TSpianoToKey.G);
  const pressAb = useKeyPress(TSpianoToKey.Ab);
  const pressA = useKeyPress(TSpianoToKey.A);
  const pressBb = useKeyPress(TSpianoToKey.Bb);
  const pressB = useKeyPress(TSpianoToKey.B);

  const [C, setC] = useState(false);
  const [Db, setDb] = useState(false);
  const [D, setD] = useState(false);
  const [Eb, setEb] = useState(false);
  const [E, setE] = useState(false);
  const [F, setF] = useState(false);
  const [Gb, setGb] = useState(false);
  const [G, setG] = useState(false);
  const [Ab, setAb] = useState(false);
  const [A, setA] = useState(false);
  const [Bb, setBb] = useState(false);
  const [B, setB] = useState(false);

  const pressEffect = (press: boolean, chord: TSchordEnum) => {
    let toStop;
    if (press) {
      toStop = rightSound[chord + octave].play();
      const pressed = document.getElementById(chord);
      pressed!.classList.add("playing");
    } else {
      rightSound[chord + (octave - 1)].stop(toStop);
      rightSound[chord + octave].stop(toStop);
      rightSound[chord + (octave + 1)].stop(toStop);
      const pressed = document.getElementById(chord);
      pressed!.classList.remove("playing");
    }
  };

  useEffect(() => {
    if (octaveUp && octave < 7) {
      setOctave(octave + 1);
    }
    if (octaveDown && octave > 1) {
      setOctave(octave - 1);
    }
  }, [octaveUp, octaveDown]);

  useEffect(() => {
    pressEffect(pressC || C, TSchordEnum.C);
  }, [pressC, C]);

  useEffect(() => {
    pressEffect(pressDb || Db, TSchordEnum.Db);
  }, [pressDb, Db]);

  useEffect(() => {
    pressEffect(pressD || D, TSchordEnum.D);
  }, [pressD, D]);

  useEffect(() => {
    pressEffect(pressEb || Eb, TSchordEnum.Eb);
  }, [pressEb, Eb]);

  useEffect(() => {
    pressEffect(pressE || E, TSchordEnum.E);
  }, [pressE, E]);

  useEffect(() => {
    pressEffect(pressF || F, TSchordEnum.F);
  }, [pressF, F]);

  useEffect(() => {
    pressEffect(pressGb || Gb, TSchordEnum.Gb);
  }, [pressGb, Gb]);

  useEffect(() => {
    pressEffect(pressG || G, TSchordEnum.G);
  }, [pressG, G]);

  useEffect(() => {
    pressEffect(pressAb || Ab, TSchordEnum.Ab);
  }, [pressAb, Ab]);

  useEffect(() => {
    pressEffect(pressA || A, TSchordEnum.A);
  }, [pressA, A]);

  useEffect(() => {
    pressEffect(pressBb || Bb, TSchordEnum.Bb);
  }, [pressBb, Bb]);

  useEffect(() => {
    pressEffect(pressB || B, TSchordEnum.B);
  }, [pressB, B]);

  return (
    <Row className="mt-2">
      <Col xs={12} className="octave text-center">
        {octave}&nbsp;Octave
      </Col>
      <Col xs={12}>
        <div className="keys">
          <div
            className="key"
            id="C"
            onMouseDownCapture={() => setC(true)}
            onMouseUp={() => setC(false)}
            onMouseOut={() => setC(false)}
          ></div>
          <div
            className="key sharp"
            id="Db"
            onMouseDownCapture={() => setDb(true)}
            onMouseUp={() => setDb(false)}
            onMouseOut={() => setDb(false)}
          ></div>
          <div
            className="key"
            id="D"
            onMouseDownCapture={() => setD(true)}
            onMouseUp={() => setD(false)}
            onMouseOut={() => setD(false)}
          ></div>
          <div
            className="key sharp"
            id="Eb"
            onMouseDownCapture={() => setEb(true)}
            onMouseUp={() => setEb(false)}
            onMouseOut={() => setEb(false)}
          ></div>
          <div
            className="key"
            id="E"
            onMouseDownCapture={() => setE(true)}
            onMouseUp={() => setE(false)}
            onMouseOut={() => setE(false)}
          ></div>
          <div
            className="key"
            id="F"
            onMouseDownCapture={() => setF(true)}
            onMouseUp={() => setF(false)}
            onMouseOut={() => setF(false)}
          ></div>
          <div
            className="key sharp"
            id="Gb"
            onMouseDownCapture={() => setGb(true)}
            onMouseUp={() => setGb(false)}
            onMouseOut={() => setGb(false)}
          ></div>
          <div
            className="key"
            id="G"
            onMouseDownCapture={() => setG(true)}
            onMouseUp={() => setG(false)}
            onMouseOut={() => setG(false)}
          ></div>
          <div
            className="key sharp"
            id="Ab"
            onMouseDownCapture={() => setAb(true)}
            onMouseUp={() => setAb(false)}
            onMouseOut={() => setAb(false)}
          ></div>
          <div
            className="key"
            id="A"
            onMouseDownCapture={() => setA(true)}
            onMouseUp={() => setA(false)}
            onMouseOut={() => setA(false)}
          ></div>
          <div
            className="key sharp"
            id="Bb"
            onMouseDownCapture={() => setBb(true)}
            onMouseUp={() => setBb(false)}
            onMouseOut={() => setBb(false)}
          ></div>
          <div
            className="key"
            id="B"
            onMouseDownCapture={() => {
              setB(true);
            }}
            onMouseUp={() => setB(false)}
            onMouseOut={() => setB(false)}
          ></div>
        </div>
      </Col>
    </Row>
  );
};

export default Piano;
