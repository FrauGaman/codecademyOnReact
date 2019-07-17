import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function AdminButton({ className, innerBtn, position, onClick }) {
  return (
    <Container>
      <Row>
        <Col md={position}>
          <button className={className} onClick={onClick} >{innerBtn}</button>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminButton;
