import React from "react";
import Piano from "./Piano";
import Code from "./Code";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <div>
      <Container>
        <Piano />
        <Code />
      </Container>
    </div>
  );
};

export default App;
