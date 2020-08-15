import React, { useEffect, useState, useContext } from "react";

import "../css/Piano.css";
import { TSpianoToKey } from "../config/toKeyConfig";
import useKeyPress from "../hooks/useKeyPress";
import { Row, Col } from "react-bootstrap";
import { TSchordEnum } from "../config/chordConfig";
import { rightSoundMaker } from "../lib/rightSound";
import { TSinstrumentEnum } from "../config/instrumentConfig";
import instContext from "../context/instContext";

let rightSound = rightSoundMaker(
  "/soundfont/MusyngKite/" + TSinstrumentEnum.acoustic_grand_piano + "-mp3/"
);

const Piano = () => {
  const { rightInst } = useContext(instContext);

  useEffect(() => {
    rightSound = rightSoundMaker(
      "/soundfont/MusyngKite/" + rightInst + "-mp3/"
    );
  }, [rightInst]);

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
    return () => {
      let toStop;
      const pressed = document.getElementById(chord);

      if (press) {
        toStop = rightSound[chord + octave].play();
        pressed!.classList.add("playing");
      } else {
        rightSound[chord + (octave - 1)].stop(toStop);
        rightSound[chord + octave].stop(toStop);
        rightSound[chord + (octave + 1)].stop(toStop);
        pressed!.classList.remove("playing");
      }
    };
  };

  useEffect(() => {
    if (octaveUp && octave < 7) setOctave(octave + 1);
    else if (octaveDown && octave > 1) setOctave(octave - 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [octaveUp, octaveDown]);

  useEffect(pressEffect(pressC, TSchordEnum.C), [pressC]);
  useEffect(pressEffect(pressDb, TSchordEnum.Db), [pressDb]);
  useEffect(pressEffect(pressD, TSchordEnum.D), [pressD]);
  useEffect(pressEffect(pressEb, TSchordEnum.Eb), [pressEb]);
  useEffect(pressEffect(pressE, TSchordEnum.E), [pressE]);
  useEffect(pressEffect(pressF, TSchordEnum.F), [pressF]);
  useEffect(pressEffect(pressGb, TSchordEnum.Gb), [pressGb]);
  useEffect(pressEffect(pressG, TSchordEnum.G), [pressG]);
  useEffect(pressEffect(pressAb, TSchordEnum.Ab), [pressAb]);
  useEffect(pressEffect(pressA, TSchordEnum.A), [pressA]);
  useEffect(pressEffect(pressBb, TSchordEnum.Bb), [pressBb]);
  useEffect(pressEffect(pressB, TSchordEnum.B), [pressB]);

  return (
    <Row className="mt-2">
      <Col xs={12} className="octave text-center">
        {octave}&nbsp;Octave
      </Col>
      <Col xs={12}>
        <div className="keys">
          <div className="key" id="C"></div>
          <div className="key sharp" id="Db"></div>
          <div className="key" id="D"></div>
          <div className="key sharp" id="Eb"></div>
          <div className="key" id="E"></div>
          <div className="key" id="F"></div>
          <div className="key sharp" id="Gb"></div>
          <div className="key" id="G"></div>
          <div className="key sharp" id="Ab"></div>
          <div className="key" id="A"></div>
          <div className="key sharp" id="Bb"></div>
          <div className="key" id="B"></div>
        </div>
      </Col>
    </Row>
  );
};

export default Piano;
