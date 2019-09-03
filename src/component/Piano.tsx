import React, { useEffect, useState } from "react";

import "../css/Piano.css";
import { Howl, Howler } from "howler";
import { FSpianoToKey } from "../config/toKeyConfig";
import useKeyPress from "../hooks/useKeyPress";
import { Row, Col } from "react-bootstrap";
import { FSchordArray, FSchordEnum } from "../config/chordConfig";
import { FSinstrumentEnum } from "../config/instrumentConfig";
import { rightSound } from "../lib/rightSound";

const inst: string = FSinstrumentEnum.acoustic_grand_piano;

const Piano = () => {
  const [octave, setOctave] = useState(4);

  const octaveUp = useKeyPress(FSpianoToKey.OctaveUp);
  const octaveDown = useKeyPress(FSpianoToKey.OctaveDown);

  const pressC = useKeyPress(FSpianoToKey.C);
  const pressDb = useKeyPress(FSpianoToKey.Db);
  const pressD = useKeyPress(FSpianoToKey.D);
  const pressEb = useKeyPress(FSpianoToKey.Eb);
  const pressE = useKeyPress(FSpianoToKey.E);
  const pressF = useKeyPress(FSpianoToKey.F);
  const pressGb = useKeyPress(FSpianoToKey.Gb);
  const pressG = useKeyPress(FSpianoToKey.G);
  const pressAb = useKeyPress(FSpianoToKey.Ab);
  const pressA = useKeyPress(FSpianoToKey.A);
  const pressBb = useKeyPress(FSpianoToKey.Bb);
  const pressB = useKeyPress(FSpianoToKey.B);

  const pressEffect = (press: boolean, chord: FSchordEnum) => {
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
    pressEffect(pressC, FSchordEnum.C);
  }, [pressC]);

  useEffect(() => {
    pressEffect(pressDb, FSchordEnum.Db);
  }, [pressDb]);

  useEffect(() => {
    pressEffect(pressD, FSchordEnum.D);
  }, [pressD]);

  useEffect(() => {
    pressEffect(pressEb, FSchordEnum.Eb);
  }, [pressEb]);

  useEffect(() => {
    pressEffect(pressE, FSchordEnum.E);
  }, [pressE]);

  useEffect(() => {
    pressEffect(pressF, FSchordEnum.F);
  }, [pressF]);

  useEffect(() => {
    pressEffect(pressGb, FSchordEnum.Gb);
  }, [pressGb]);

  useEffect(() => {
    pressEffect(pressG, FSchordEnum.G);
  }, [pressG]);

  useEffect(() => {
    pressEffect(pressAb, FSchordEnum.Ab);
  }, [pressAb]);

  useEffect(() => {
    pressEffect(pressA, FSchordEnum.A);
  }, [pressA]);

  useEffect(() => {
    pressEffect(pressBb, FSchordEnum.Bb);
  }, [pressBb]);

  useEffect(() => {
    pressEffect(pressB, FSchordEnum.B);
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
