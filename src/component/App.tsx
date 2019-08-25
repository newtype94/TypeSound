import React from "react";
import Piano from "./Piano";
import Code from "./Code";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <Container>
      <Piano />
      <Code />
    </Container>
  );
};

export default App;
