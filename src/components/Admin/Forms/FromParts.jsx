import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import './formPartsStyle.sass';

export function FormInput(props) {
  return (
    <Form.Control
      type="text"
      placeholder={props.placeholder}
      value={props.input.value}
      onChange={props.input.onChange}
    />
  )
}

export function FormTextarea(props) {
  return (
    <Form.Control
      as="textarea"
      rows="3"
      placeholder={props.placeholder}
      value={props.input.value}
      onChange={props.input.onChange}
    />
  )
}

export function FormSelector(props) {
  return (
    <Form.Control
      as="select"
      placeholder={props.placeholder}
      value={props.input.value}
      onChange={props.input.onChange}
    >
      <option />
      <option>Courses</option>
      <option>Exclusive Course</option>
    </Form.Control>
  )
}

export function FormMultiSelector(props) {
  return (
    <Form.Control
      as="select"
      multiple={true}
      placeholder={props.placeholder}
      value={props.input.value}
      onChange={props.input.onChange}
    >
      {props.dataArr.map(item =>
        <option value={item.id} key={item.id}>{item.name}</option>
      )}
    </Form.Control>
  )
}
