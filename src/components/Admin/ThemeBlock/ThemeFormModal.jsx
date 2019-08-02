import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Modal, Button, Form } from 'react-bootstrap';
import { FormInput, FormTextarea } from '../ComponentsPieces/Forms/FromParts';
import { requiredField, setMaxLength, stringValidator, linkValidator } from '../validator';

const maxL = setMaxLength(300);

function ThemeFormModal({ title, handleSubmit, submitData, onHide, show }) {
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={onHide}
      title={title}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id="themeForm" onSubmit={handleSubmit(submitData)}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Field name="name" component={FormInput} type="text" placeholder="Name" validate={[requiredField, stringValidator]} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Field name="descr" component={FormTextarea} placeholder="Descriptopn" validate={[requiredField, maxL]} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Link</Form.Label>
            <Field name="link" component={FormInput} type="text" placeholder="/link" validate={[requiredField, linkValidator]} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
        <Button variant="primary" form="themeForm" type="submit">Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
}

ThemeFormModal.propTypes = {
  title: PropTypes.string,
  handleSubmit: PropTypes.func,
  submitData: PropTypes.func,
  onHide: PropTypes.func,
  show: PropTypes.bool,
}

ThemeFormModal = reduxForm({
  form: 'changeTheme',
  enableReinitialize: true,
  destroyOnUnmount: true,
})(ThemeFormModal);

export default ThemeFormModal;
