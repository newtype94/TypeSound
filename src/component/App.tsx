import React from "react";
import InstProvider from "./InstProvider";
import Piano from "./Piano";
import Chord from "./Chord";
import { Container, Col, Row } from "react-bootstrap";
import GuideBook from "./GuideBook";
import Footer from "./Footer";

import InstPicker from "./InstPicker";

const App = () => {
  return (
    <InstProvider>
      <div>
        <Container>
          <Row className="mt-3">
            <Col className="text-white text-center" xs={12}>
              <h1>TypeSound</h1>
            </Col>
          </Row>
          <GuideBook />
          <InstPicker />
          <Piano />
          <Chord />
        </Container>
        <Footer />
      </div>
    </InstProvider>
  );
};

export default App;
