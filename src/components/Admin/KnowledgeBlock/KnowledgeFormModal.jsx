import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Modal, Button, Form } from 'react-bootstrap';
import { FormInput } from '../Forms/FromParts';
import { requiredField, stringValidator } from '../validator';


function KnowledgeFormModal({ title, handleSubmit, submitData, onHide, show }) {
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
        <Form id="knowledgeForm" onSubmit={handleSubmit(submitData)} >
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Knowledge</Form.Label>
            <Field name="name" component={FormInput} type="text" placeholder="item" validate={[requiredField, stringValidator]} />
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

KnowledgeFormModal.propTypes = {
  title: PropTypes.string,
  handleSubmit: PropTypes.func,
  submitData: PropTypes.func,
  onHide: PropTypes.func,
  show: PropTypes.bool,
};

KnowledgeFormModal = reduxForm({
  form: 'changeKnowledge',
  enableReinitialize: true,
  destroyOnUnmount: true,
})(KnowledgeFormModal);

export default KnowledgeFormModal;
