import React, { useState } from "react";
import Piano from "./Piano";
import Chord from "./Chord";
import { Container, Col, Row, Form, FormControlProps } from "react-bootstrap";
import instrumentList from "../config/instrumentConfig";
import { ReplaceProps, BsPrefixProps } from "react-bootstrap/helpers";

const App = () => {
  const [chordInst, setChordInst] = useState("acoustic_grand_piano-mp3");
  const [pianoInst, setPianoInst] = useState("acoustic_grand_piano-mp3");
  const instrumentChanged = (
    event: React.FormEvent<
      ReplaceProps<
        React.ElementType<any>,
        BsPrefixProps<React.ElementType<any>> & FormControlProps
      >
    >
  ) => {
    if (event.currentTarget.id === "chordInst")
      setChordInst(event.currentTarget.value! + "-mp3");
    if (event.currentTarget.id === "pianoInst") {
      setPianoInst(event.currentTarget.value! + "-mp3");
    }
  };
  return (
    <Container>
      <Row className="mt-3">
        <Col xs={12}>
          <Form.Group controlId="Instrument">
            <Row>
              <Col>
                <Form.Label className="text-white">Code Instrument</Form.Label>
                <Form.Control
                  as="select"
                  onChange={instrumentChanged}
                  id="chordInst"
                >
                  {instrumentList.map(value => {
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
                  {instrumentList.map(value => {
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
