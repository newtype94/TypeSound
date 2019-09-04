import React from "react";
import Piano from "./Piano";
import Chord from "./Chord";
import { Container, Col, Row, Form, FormControlProps } from "react-bootstrap";
import { TSinstrumentList, TSinstrumentEnum } from "../config/instrumentConfig";
import { ReplaceProps, BsPrefixProps } from "react-bootstrap/helpers";
import GuideBook from "./GuideBook";

const App = () => {
  const instrumentChanged = (
    event: React.FormEvent<
      ReplaceProps<
        React.ElementType<any>,
        BsPrefixProps<React.ElementType<any>> & FormControlProps
      >
    >
  ) => {
    if (event.currentTarget.id === "chordInst") {
      localStorage.setItem("leftInst", event.currentTarget.value!);
      window.location.reload();
    }
    if (event.currentTarget.id === "pianoInst") {
      localStorage.setItem("rightInst", event.currentTarget.value!);
      window.location.reload();
    }
  };

  return (
    <Container>
      <Row className="mt-3">
        <Col className="text-white text-center" xs={12}>
          <h1>TypeSound</h1>
        </Col>
      </Row>
      <GuideBook></GuideBook>
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
                  {TSinstrumentList.map(value => {
                    if (
                      value ===
                      (localStorage.getItem("leftInst") ||
                        TSinstrumentEnum.acoustic_grand_piano)
                    )
                      return <option selected>{value}</option>;
                    else return <option>{value}</option>;
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
                  {TSinstrumentList.map(value => {
                    if (
                      value ===
                      (localStorage.getItem("rightInst") ||
                        TSinstrumentEnum.acoustic_grand_piano)
                    )
                      return <option selected>{value}</option>;
                    else return <option>{value}</option>;
                  })}
                </Form.Control>
              </Col>
            </Row>
          </Form.Group>
        </Col>
      </Row>
      <Piano />
      <Chord />
    </Container>
  );
};

export default App;
