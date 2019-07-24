import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Modal, Button, Form } from 'react-bootstrap';
import { FormInput } from '../Forms/FromParts';
import { connect } from 'react-redux';

function KnowledgeFormModal({ handleSubmit, submitData, onHide, show }) {

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
        <Form id="knowledgeForm" onSubmit={handleSubmit(submitData)} >
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Knowledge</Form.Label>
            <Field name="name" component={FormInput} type="text" placeholder="item" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
        <Button variant="primary" form="knowledgeForm" type="submit">Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
}

KnowledgeFormModal = reduxForm({
  form: 'changeKnowledge',
  enableReinitialize: true,
})(KnowledgeFormModal);

export default KnowledgeFormModal;
