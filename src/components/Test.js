import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Test = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={30} lg={8} xs={12}>
            <h2 className="text-center">React Boostrap</h2>
            <Button variant="danger">Hola</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Test;
