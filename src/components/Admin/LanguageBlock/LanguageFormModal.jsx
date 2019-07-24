import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Modal, Button, Form } from 'react-bootstrap';
import { FormInput, FormTextarea } from '../Forms/FromParts';

function LanguageFormModal({ handleSubmit, submitData, onHide, show }) {
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create new course
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id="languageForm" onSubmit={handleSubmit(submitData)}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Field name="name" component={FormInput} type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Field name="descr" component={FormTextarea} placeholder="Descriptopn" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Link</Form.Label>
            <Field name="link" component={FormInput} type="text" placeholder="/link" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
        <Button variant="primary" form="languageForm" type="submit">Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
}

LanguageFormModal = reduxForm({
  form: 'changeLanguage',
  enableReinitialize: true,
})(LanguageFormModal);

export default LanguageFormModal;
