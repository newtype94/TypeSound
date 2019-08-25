import React, { useEffect, useState } from "react";
import "../css/Code.css";
import { Howl } from "howler";
import { codeToKey, variationTokey } from "../config/keyConfig";
import { Row, Col } from "react-bootstrap";
import useKeyPress from "../hooks/useKeyPress";

const Code = () => {
  const instrument = "acoustic_grand_piano-mp3";
  const src = "/soundfont/MusyngKite/" + instrument + "/";
  const [octave, setOctave] = useState(4);
  const [code, setCode] = useState("");
  const [variation, setVariation] = useState("");
  const [synCode, setSynCode] = useState("");

  const octaveUp = useKeyPress(codeToKey.OctaveUp);
  const octaveDown = useKeyPress(codeToKey.OctaveDown);

  const pressC = useKeyPress(codeToKey.C);
  const pressD = useKeyPress(codeToKey.D);
  const pressE = useKeyPress(codeToKey.E);
  const pressF = useKeyPress(codeToKey.F);
  const pressG = useKeyPress(codeToKey.G);
  const pressA = useKeyPress(codeToKey.A);
  const pressB = useKeyPress(codeToKey.B);
  const pressDb = useKeyPress(codeToKey.Db);
  const pressEb = useKeyPress(codeToKey.Eb);
  const pressAb = useKeyPress(codeToKey.Ab);
  const pressBb = useKeyPress(codeToKey.Bb);

  const varPlain = useKeyPress(variationTokey.plain);
  const varM = useKeyPress(variationTokey.m);
  const varSeven = useKeyPress(variationTokey.seven);
  const varSusFour = useKeyPress(variationTokey.susFour);
  const varSharp = useKeyPress(variationTokey.sharp);
  const varDim = useKeyPress(variationTokey.dim);

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
      setCode("C");
    }
  }, [pressC]);

  useEffect(() => {
    if (pressD) {
      setCode("D");
    }
  }, [pressD]);

  return (
    <Row>
      <Col xs={4} className="octave">
        octave : {octave}
      </Col>
      <Col xs={4} className="octave">
        code : {code}
      </Col>
      <Col xs={4} className="octave">
        variaton : {variation}
      </Col>
    </Row>
  );
};

export default Code;
