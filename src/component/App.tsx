import React from "react";
import Piano from "./Piano";
import Chord from "./Chord";
import {
  Container,
  Col,
  Row,
  Form,
  FormControlProps,
  Accordion,
  Card
} from "react-bootstrap";
import { TSinstrumentList, TSinstrumentEnum } from "../config/instrumentConfig";
import { ReplaceProps, BsPrefixProps } from "react-bootstrap/helpers";

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
      <Row className="mt-3">
        <Col xs={12}>
          <Accordion>
            <Card bg="warning">
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <b>+ Guide Book</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <img width="100%" src="/guide.jpg"></img>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
      </Row>
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
