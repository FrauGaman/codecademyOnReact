import React from 'react';
import { Form } from 'react-bootstrap';

function Multiselector({ dataArr,  name, value, onChange }) {
  return (
    <Form.Control as="select" multiple name={name} value={value} onChange={onChange}>
      {dataArr.map(item =>
        <option key={item.id}>{item.name}</option>
      )}
    </Form.Control>
  )
}

export default Multiselector;
