import React, { useEffect, useRef }  from 'react';
import { Form } from 'react-bootstrap';
import Select from 'react-select';

export function FormInput(props) {
  const formInputFocus = useRef(null);

  useEffect(() => {
    	if (formInputFocus.current !== null && props.useFocus === true) {
    	  formInputFocus.current.focus();
    	}
    }, [formInputFocus]);

  const hasError = props.meta.touched && props.meta.error;
  return (
    <div>
      <Form.Control
        type="text"
        placeholder={props.placeholder}
        value={props.input.value}
        onChange={props.input.onChange}
        ref={formInputFocus}
      />
      {hasError && <span style={{color: 'red'}}>{props.meta.error}</span>}
    </div>
  );
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
  );
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
  );
}

export function FormMultiSelector(props) {
  const hasError = props.meta.touched && props.meta.error;
  return (
    <div>
      <Select options={props.options} isMulti className={props.className} onChange={props.input.onChange} value={props.input.value} isSearchable={false} />
      {hasError && <span style={{color: 'red'}}>{props.meta.error}</span>}
    </div>
  );
}
