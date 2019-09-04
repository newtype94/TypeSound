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
    pressEffect(pressC, TSchordEnum.C);
  }, [pressC]);

  useEffect(() => {
    pressEffect(pressDb, TSchordEnum.Db);
  }, [pressDb]);

  useEffect(() => {
    pressEffect(pressD, TSchordEnum.D);
  }, [pressD]);

  useEffect(() => {
    pressEffect(pressEb, TSchordEnum.Eb);
  }, [pressEb]);

  useEffect(() => {
    pressEffect(pressE, TSchordEnum.E);
  }, [pressE]);

  useEffect(() => {
    pressEffect(pressF, TSchordEnum.F);
  }, [pressF]);

  useEffect(() => {
    pressEffect(pressGb, TSchordEnum.Gb);
  }, [pressGb]);

  useEffect(() => {
    pressEffect(pressG, TSchordEnum.G);
  }, [pressG]);

  useEffect(() => {
    pressEffect(pressAb, TSchordEnum.Ab);
  }, [pressAb]);

  useEffect(() => {
    pressEffect(pressA, TSchordEnum.A);
  }, [pressA]);

  useEffect(() => {
    pressEffect(pressBb, TSchordEnum.Bb);
  }, [pressBb]);

  useEffect(() => {
    pressEffect(pressB, TSchordEnum.B);
  }, [pressB]);

  return (
    <Row className="mt-2">
      <Col xs={12} className="octave text-center">
        {octave}&nbsp;Octave
      </Col>
      <Col xs={12}>
        <div className="keys">
          <div className="key" id="C">
            <span className="keyMapping">Y</span>
          </div>
          <div className="key sharp" id="Db">
            <span className="keyMapping">7</span>
          </div>
          <div className="key" id="D">
            <span className="keyMapping">U</span>
          </div>
          <div className="key sharp" id="Eb">
            <span className="keyMapping">8</span>
          </div>
          <div className="key" id="E">
            <span className="keyMapping">I</span>
          </div>
          <div className="key" id="F">
            <span className="keyMapping">O</span>
          </div>
          <div className="key sharp" id="Gb">
            <span className="keyMapping">0</span>
          </div>
          <div className="key" id="G">
            <span className="keyMapping">P</span>
          </div>
          <div className="key sharp" id="Ab">
            <span className="keyMapping">-</span>
          </div>
          <div className="key" id="A">
            <span className="keyMapping">[</span>
          </div>
          <div className="key sharp" id="Bb">
            <span className="keyMapping">=</span>
          </div>
          <div className="key" id="B">
            <span className="keyMapping">]</span>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Piano;
