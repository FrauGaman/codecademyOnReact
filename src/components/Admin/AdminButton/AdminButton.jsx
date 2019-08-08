import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

function AdminButton({ className, innerBtn, onClick }) {
  return (
    <Container>
      <Row>
        <Col md={{ span: 2, offset: 10 }} sm={{ span: 12, offset: 0 }}>
          <button className={className} onClick={onClick}>{innerBtn}</button>
        </Col>
      </Row>
    </Container>
  );
}

AdminButton.propTypes = {
  className: PropTypes.string,
  innerBtn: PropTypes.string,
  position: PropTypes.object,
  onClick: PropTypes.func,
};

export default AdminButton;
