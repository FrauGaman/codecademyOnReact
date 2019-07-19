import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function ThemeFormModel(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create new course
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Your title" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Link</Form.Label>
            <Form.Control type="text" placeholder="Your title" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>Close</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ThemeFormModel;
