import React, { useState } from "react";
import Piano from "./Piano";
import Chord from "./Chord";
import { Container, Col, Row, Form, FormControlProps } from "react-bootstrap";
import { FSinstrumentList, FSinstrumentEnum } from "../config/instrumentConfig";
import { ReplaceProps, BsPrefixProps } from "react-bootstrap/helpers";

const App = () => {
  const [chordInst, setChordInst] = useState<string>(
    FSinstrumentEnum.acoustic_grand_piano
  );
  const [pianoInst, setPianoInst] = useState<string>(
    FSinstrumentEnum.acoustic_grand_piano
  );
  const instrumentChanged = (
    event: React.FormEvent<
      ReplaceProps<
        React.ElementType<any>,
        BsPrefixProps<React.ElementType<any>> & FormControlProps
      >
    >
  ) => {
    if (event.currentTarget.id === "chordInst")
      setChordInst(event.currentTarget.value!);
    if (event.currentTarget.id === "pianoInst") {
      setPianoInst(event.currentTarget.value!);
    }
  };
  return (
    <Container>
      <Row className="mt-3">
        <Col xs={12}>
          <Form.Group controlId="Instrument">
            <Row>
              <Col>
                <Form.Label className="text-white">Chord Instrument</Form.Label>
                <Form.Control
                  as="select"
                  onChange={instrumentChanged}
                  id="chordInst"
                >
                  {FSinstrumentList.map(value => {
                    return <option>{value}</option>;
                  })}
                </Form.Control>
              </Col>
              <Col>
                <Form.Label className="text-white">Piano Instrument</Form.Label>
                <Form.Control
                  as="select"
                  onChange={instrumentChanged}
                  id="pianoInst"
                >
                  {FSinstrumentList.map(value => {
                    return <option>{value}</option>;
                  })}
                </Form.Control>
              </Col>
            </Row>
          </Form.Group>
        </Col>
      </Row>
      <Piano instrument={pianoInst} />
      <Chord instrument={chordInst} />
    </Container>
  );
};

export default App;
