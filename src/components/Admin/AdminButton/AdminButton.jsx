import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

function AdminButton({ className, innerBtn, onClick }) {
  return (
    <Container>
      <Row>
        <Col md={{ span: 2, offset: 9 }} xs={{ span: 10, offset: 2 }}>
          <button className={className} onClick={onClick}>{innerBtn}</button>
        </Col>
      </Row>
    </Container>
  );
}

AdminButton.propTypes = {
  className: PropTypes.string,
  innerBtn: PropTypes.string,
  onClick: PropTypes.func,
};

export default AdminButton;
