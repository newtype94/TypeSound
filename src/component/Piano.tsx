import React, { useEffect, useState } from "react";

import "../css/Piano.css";
import { Howl, Howler } from "howler";
import { FSpianoToKey } from "../config/toKeyConfig";
import useKeyPress from "../hooks/useKeyPress";
import { Row, Col } from "react-bootstrap";
import { FSchordArray } from "../config/chordConfig";
import { FSinstrumentEnum } from "../config/instrumentConfig";

const inst: string = FSinstrumentEnum.acoustic_grand_piano;

const Piano = ({ instrument = inst }) => {
  const [octave, setOctave] = useState(4);
  const src = "/soundfont/MusyngKite/" + instrument + "-mp3/";

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

  let sound: Howl[] = [];
  FSchordArray.forEach(value => {
    sound.push(
      new Howl({ src: [src + value + octave + ".mp3"], autoplay: false })
    );
  });

  Howler.volume(1);

  useEffect(() => {
    if (octaveUp && octave < 7) {
      setOctave(octave + 1);
    }
    if (octaveDown && octave > 0) {
      setOctave(octave - 1);
    }
  }, [octaveUp, octaveDown]);

  useEffect(() => {
    if (pressC) {
      sound[0].play();
      const pressed = document.getElementById("C");
      pressed!.classList.add("playing");
    } else {
      sound[0].stop();
      const pressed = document.getElementById("C");
      pressed!.classList.remove("playing");
    }
  }, [pressC]);

  useEffect(() => {
    if (pressDb) {
      sound[1].play();
      const pressed = document.getElementById("Db");
      pressed!.classList.add("playing");
    } else {
      sound[1].stop();
      const pressed = document.getElementById("Db");
      pressed!.classList.remove("playing");
    }
  }, [pressDb]);

  useEffect(() => {
    if (pressD) {
      sound[2].play();
      const pressed = document.getElementById("D");
      pressed!.classList.add("playing");
    } else {
      sound[2].stop();
      const pressed = document.getElementById("D");
      pressed!.classList.remove("playing");
    }
  }, [pressD]);

  useEffect(() => {
    if (pressEb) {
      sound[3].play();
      const pressed = document.getElementById("Eb");
      pressed!.classList.add("playing");
    } else {
      sound[3].stop();
      const pressed = document.getElementById("Eb");
      pressed!.classList.remove("playing");
    }
  }, [pressEb]);

  useEffect(() => {
    if (pressE) {
      sound[4].play();
      const pressed = document.getElementById("E");
      pressed!.classList.add("playing");
    } else {
      sound[4].stop();
      const pressed = document.getElementById("E");
      pressed!.classList.remove("playing");
    }
  }, [pressE]);

  useEffect(() => {
    if (pressF) {
      sound[5].play();
      const pressed = document.getElementById("F");
      pressed!.classList.add("playing");
    } else {
      sound[5].stop();
      const pressed = document.getElementById("F");
      pressed!.classList.remove("playing");
    }
  }, [pressF]);

  useEffect(() => {
    if (pressGb) {
      sound[6].play();
      const pressed = document.getElementById("Gb");
      pressed!.classList.add("playing");
    } else {
      sound[6].stop();
      const pressed = document.getElementById("Gb");
      pressed!.classList.remove("playing");
    }
  }, [pressGb]);

  useEffect(() => {
    if (pressG) {
      sound[7].play();
      const pressed = document.getElementById("G");
      pressed!.classList.add("playing");
    } else {
      sound[7].stop();
      const pressed = document.getElementById("G");
      pressed!.classList.remove("playing");
    }
  }, [pressG]);

  useEffect(() => {
    if (pressAb) {
      sound[8].play();
      const pressed = document.getElementById("Ab");
      pressed!.classList.add("playing");
    } else {
      sound[8].stop();
      const pressed = document.getElementById("Ab");
      pressed!.classList.remove("playing");
    }
  }, [pressAb]);

  useEffect(() => {
    if (pressA) {
      sound[9].play();
      const pressed = document.getElementById("A");
      pressed!.classList.add("playing");
    } else {
      sound[9].stop();
      const pressed = document.getElementById("A");
      pressed!.classList.remove("playing");
    }
  }, [pressA]);

  useEffect(() => {
    if (pressBb) {
      sound[10].play();
      const pressed = document.getElementById("Bb");
      pressed!.classList.add("playing");
    } else {
      sound[10].stop();
      const pressed = document.getElementById("Bb");
      pressed!.classList.remove("playing");
    }
  }, [pressBb]);

  useEffect(() => {
    if (pressB) {
      sound[11].play();
      const pressed = document.getElementById("B");
      pressed!.classList.add("playing");
    } else {
      sound[11].stop();
      const pressed = document.getElementById("B");
      pressed!.classList.remove("playing");
    }
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
