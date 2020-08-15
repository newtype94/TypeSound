import React, { useContext } from "react";
import { Col, Row, Form, FormControlProps } from "react-bootstrap";
import { ReplaceProps, BsPrefixProps } from "react-bootstrap/helpers";
import instContext from "../context/instContext";
import { TSinstrumentList, TSinstrumentEnum } from "../config/instrumentConfig";

const InstPicker = () => {
  const { leftInst, rightInst, setLeftInst, setRightInst } = useContext(
    instContext
  );

  const instrumentChanged = (
    event: React.FormEvent<
      ReplaceProps<
        React.ElementType<any>,
        BsPrefixProps<React.ElementType<any>> & FormControlProps
      >
    >
  ) => {
    if (event.currentTarget.id === "leftInst") {
      setLeftInst(event.currentTarget.value as TSinstrumentEnum);
    }
    if (event.currentTarget.id === "rightInst") {
      setRightInst(event.currentTarget.value as TSinstrumentEnum);
    }
  };

  return (
    <Row className="mt-3">
      <Col xs={12}>
        <Form.Group>
          <Row>
            <Col>
              <Form.Label className="text-white">Chord Instrument</Form.Label>
              <Form.Control
                as="select"
                onChange={instrumentChanged}
                id="leftInst"
              >
                {TSinstrumentList.map((value: TSinstrumentEnum) => (
                  <option key={value} defaultValue={leftInst}>
                    {value}
                  </option>
                ))}
              </Form.Control>
            </Col>
            <Col>
              <Form.Label className="text-white">Piano Instrument</Form.Label>
              <Form.Control
                as="select"
                onChange={instrumentChanged}
                id="rightInst"
              >
                {TSinstrumentList.map((value) => (
                  <option key={value} defaultValue={rightInst}>
                    {value}
                  </option>
                ))}
              </Form.Control>
            </Col>
          </Row>
        </Form.Group>
      </Col>
    </Row>
  );
};

export default InstPicker;
