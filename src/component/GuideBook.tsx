import React from "react";

import { Col, Row, Accordion, Card } from "react-bootstrap";
import {
  FaKeyboard,
  FaRegWindowMinimize,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa";

const GuideBook = () => {
  return (
    <Row className="mt-3">
      <Col xs={12}>
        <Accordion>
          <Card bg="warning">
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <b>+ Guide Book</b>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <h6>-Chrome Recommended</h6>
                <h6>
                  -Keyboard is necessary. On mobile, Use Bluetooth keyboard
                </h6>
                <h6>
                  -There are 3 chord patterns (&nbsp;
                  <FaRegWindowMinimize />
                  <FaChevronUp />
                  <FaChevronDown />) about playing
                </h6>
                <h6>-While pressing chord key, chord plays itself</h6>
                <h6>
                  -Use single chord key at the same time (If not, there will be
                  conflict)
                </h6>
                <h3 style={{ color: "red", float: "left" }}>
                  <FaKeyboard></FaKeyboard>
                  Chord Map
                </h3>
                <h3 style={{ color: "skyblue", float: "right" }}>
                  <FaKeyboard></FaKeyboard>
                  Piano Map
                </h3>
                <img width="100%" src="/guide.jpg" alt="guide" />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Col>
    </Row>
  );
};

export default GuideBook;
