import React  from 'react';
import { Form } from 'react-bootstrap';
// import './formPartsStyle.sass';

export function FormInput(props) {
  const hasError = props.meta.touched && props.meta.error;
  return (
    <div>
      <Form.Control
        type="text"
        placeholder={props.placeholder}
        value={props.input.value}
        onChange={props.input.onChange}
      />
      {hasError && <span style={{color: 'red'}}>{props.meta.error}</span>}
    </div>
  )
}

export function FormTextarea(props) {
  const hasError = props.meta.touched && props.meta.error;
  return (
    <div>
      <Form.Control
        as="textarea"
        rows="3"
        placeholder={props.placeholder}
        value={props.input.value}
        onChange={props.input.onChange}
      />
      {hasError && <span style={{color: 'red'}}>{props.meta.error}</span>}
    </div>
  )
}

export function FormSelector(props) {
  const hasError = props.meta.touched && props.meta.error;
  return (
    <div>
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
      {hasError && <span style={{color: 'red'}}>{props.meta.error}</span>}
    </div>
  )
}

export function FormMultiSelector(props) {
  const hasError = props.meta.touched && props.meta.error;
  return (
    <div>
      <Form.Control
        as="select"
        multiple={true}
        placeholder={props.placeholder}
        value={props.input.value || []}
        onChange={props.input.onChange}
      >
        {props.dataArr.map(item =>
          <option value={item.id} key={item.id}>{item.name}</option>
        )}
      </Form.Control>
      {hasError && <span style={{color: 'red'}}>{props.meta.error}</span>}
    </div>

  )
}
