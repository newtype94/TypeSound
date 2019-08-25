import React, { useEffect, useState } from "react";
import "../css/Piano.css";
import { Howl } from "howler";
import { pianoToKey } from "../config/keyConfig";
import useKeyPress from "../hooks/useKeyPress";
import { Row, Col, Form, FormControlProps } from "react-bootstrap";
import { ReplaceProps, BsPrefixProps } from "react-bootstrap/helpers";
import instrumentList from "../config/instrumentConfig";

const Piano = () => {
  const [instrument, setInstrument] = useState("acoustic_grand_piano-mp3");
  const [octave, setOctave] = useState(4);
  const src = "/soundfont/MusyngKite/" + instrument + "/";

  const octaveUp = useKeyPress(pianoToKey.OctaveUp);
  const octaveDown = useKeyPress(pianoToKey.OctaveDown);

  const pressC = useKeyPress(pianoToKey.C);
  const pressDb = useKeyPress(pianoToKey.Db);
  const pressD = useKeyPress(pianoToKey.D);
  const pressEb = useKeyPress(pianoToKey.Eb);
  const pressE = useKeyPress(pianoToKey.E);

  const sound = {
    C: new Howl({
      src: [src + "C" + octave + ".mp3"],
      autoplay: false
    }),
    Db: new Howl({
      src: [src + "Db" + octave + ".mp3"],
      autoplay: false
    }),
    D: new Howl({
      src: [src + "D" + octave + ".mp3"],
      autoplay: false
    }),
    Eb: new Howl({
      src: [src + "Eb" + octave + ".mp3"],
      autoplay: false
    }),
    E: new Howl({
      src: [src + "E" + octave + ".mp3"],
      autoplay: false
    })
  };

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
      sound.C.play();
      const pressed = document.getElementById("C");
      pressed!.classList.add("playing");
    } else {
      sound.C.stop();
      const pressed = document.getElementById("C");
      pressed!.classList.remove("playing");
    }
  }, [pressC]);

  useEffect(() => {
    if (pressDb) {
      sound.Db.play();
      const pressed = document.getElementById("Db");
      pressed!.classList.add("playing");
    } else {
      sound.Db.stop();
      const pressed = document.getElementById("Db");
      pressed!.classList.remove("playing");
    }
  }, [pressDb]);

  useEffect(() => {
    if (pressD) sound.D.play();
    else sound.D.stop();
  }, [pressD]);

  useEffect(() => {
    if (pressEb) sound.Eb.play();
    else sound.Eb.stop();
  }, [pressEb]);

  useEffect(() => {
    if (pressE) sound.E.play();
    else sound.E.stop();
  }, [pressE]);

  const instrumentChanged = (
    event: React.FormEvent<
      ReplaceProps<
        React.ElementType<any>,
        BsPrefixProps<React.ElementType<any>> & FormControlProps
      >
    >
  ) => {
    setInstrument(event.currentTarget.value! + "-mp3");
  };

  return (
    <Row>
      <Col xs={12}>
        <Form.Group controlId="Instrument">
          <Form.Label>Instrument</Form.Label>
          <Form.Control as="select" onChange={instrumentChanged}>
            {instrumentList.map(value => {
              return <option>{value}</option>;
            })}

            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
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
      <Col xs={12} className="octave">
        Octave : {octave}
      </Col>
    </Row>
  );
};

export default Piano;
