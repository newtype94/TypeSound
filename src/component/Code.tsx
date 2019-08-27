import React, { useEffect, useState } from "react";
import "../css/Code.css";
import { Howl } from "howler";
import { codeToKey, variationTokey } from "../config/toKeyConfig";
import { Row, Col } from "react-bootstrap";
import useKeyPress from "../hooks/useKeyPress";
import {
  variationEnum,
  codeVariationEnum,
  codeEnum,
  variationArray,
  codeArray,
  getCodeVariation
} from "../config/codeConfig";

const Code = ({ instrument = "acoustic_grand_piano-mp3" }) => {
  const src = "/soundfont/MusyngKite/" + instrument + "/";
  const [octave, setOctave] = useState(4);
  const [code, setCode] = useState(codeEnum.C);
  const [variation, setVariation] = useState(variationEnum.plain);
  const [codeVariation, setCodeVariation] = useState(codeVariationEnum.Cplain);

  const octaveUp = useKeyPress(codeToKey.OctaveUp);
  const octaveDown = useKeyPress(codeToKey.OctaveDown);

  const codeHooks = [
    useKeyPress(codeToKey.C),
    useKeyPress(codeToKey.D),
    useKeyPress(codeToKey.E),
    useKeyPress(codeToKey.F),
    useKeyPress(codeToKey.G),
    useKeyPress(codeToKey.A),
    useKeyPress(codeToKey.B),
    useKeyPress(codeToKey.Db),
    useKeyPress(codeToKey.Eb),
    useKeyPress(codeToKey.Ab),
    useKeyPress(codeToKey.Bb)
  ];

  const variationHooks = [
    useKeyPress(variationTokey.plain),
    useKeyPress(variationTokey.m),
    useKeyPress(variationTokey.seven),
    useKeyPress(variationTokey.susfour),
    useKeyPress(variationTokey.sharp),
    useKeyPress(variationTokey.dim)
  ];

  const makeCodeVariation = () => {
    setCodeVariation(
      getCodeVariation[code][variation] ||
        getCodeVariation[code][variationEnum.plain]
    );
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
    for (let i in codeArray) {
      if (codeHooks[i]) {
        setCode(codeArray[i]);
        makeCodeVariation();
      }
    }
  }, [codeHooks]);

  useEffect(() => {
    for (let i in variationArray) {
      if (variationHooks[i]) {
        setVariation(variationArray[i]);
        makeCodeVariation();
      }
    }
  }, [variationHooks]);

  return (
    <Row>
      <Col xs={4} className="octave">
        octave : {octave}
      </Col>
      <Col xs={4} className="octave">
        {codeVariation}
      </Col>
      <Col xs={4} className="octave">
        {code}+{variation}
      </Col>
    </Row>
  );
};

export default Code;
