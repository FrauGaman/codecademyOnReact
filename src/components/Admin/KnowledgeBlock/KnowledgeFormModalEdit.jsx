import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Modal, Button } from 'react-bootstrap';
import '../editFormStyle.sass';

function KnowledgeFormModalEdit (props) {
  const { submitData, handleSubmit } = props;
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.show}
      onHide={props.onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create new course
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit(submitData)}>
          <div>
            <label htmlFor="knowledge">Knowledge</label>
            <Field name="knowledge" component="input" type="text" placeholder="item" />
          </div>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>Close</Button>
            <Button variant="primary" type="submit">Save changes</Button>
          </Modal.Footer>
        </form>
      </Modal.Body>

    </Modal>
  );
}

KnowledgeFormModalEdit = reduxForm({
  form: 'knowledge',
})(KnowledgeFormModalEdit);

export default KnowledgeFormModalEdit;
