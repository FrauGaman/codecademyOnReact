import React from 'react';
import { Form } from 'react-bootstrap';

function FromInput(props) {
  return (
    <Form.Control
      type="text"
      placeholder={props.placeholder}
      value={props.input.value}
      onChange={props.input.onChange}
    />
  )
}

export default FromInput;
