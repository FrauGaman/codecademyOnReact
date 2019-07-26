import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

function SortButton({ className, innerBtn, sortKnowledgeData }) {
  return (
    <Container>
      <Row>
        <Col>
          <button className={className} onClick={sortKnowledgeData} >{innerBtn}</button>
        </Col>
      </Row>
    </Container>
  );
}

SortButton.propTypes = {
  className: PropTypes.string,
  innerBtn: PropTypes.string,
  onClick: PropTypes.func,
  sortKnowledgeData: PropTypes.func,
};

export default SortButton;
