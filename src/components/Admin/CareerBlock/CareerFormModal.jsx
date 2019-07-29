import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Form } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { FormInput, FormTextarea, FormMultiSelector } from '../Forms/FromParts';
import { requiredField, setMaxLength, stringValidator } from '../validator';

const maxLDescr = setMaxLength(300);

function CareerFormModal({ title, handleSubmit, submitData, onHide, show, themeList, languageList, knowledgeList }) {
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
        <Form id="careerForm" onSubmit={handleSubmit(submitData)}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Field name="title" component={FormInput} type="text" placeholder="Title" validate={[requiredField, stringValidator]} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Field name="descr" component={FormTextarea} placeholder="Descriptopn" validate={[requiredField, maxLDescr]} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Img</Form.Label>
            <Field name="img" component={FormInput} type="text" placeholder="Img" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Bg color</Form.Label>
            <Field name="bgColor" component={FormInput} type="text" placeholder="Background color" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Theme</Form.Label>
            <Field name="theme" component={FormMultiSelector} dataArr={themeList} validate={[requiredField]} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Language</Form.Label>
            <Field name="language" component={FormMultiSelector} dataArr={languageList} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Knowledge</Form.Label>
            <Field name="knowledge" component={FormMultiSelector} dataArr={knowledgeList} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
        <Button variant="primary" form="careerForm" type="submit">Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
}

CareerFormModal.propTypes = {
  title: PropTypes.string,
  handleSubmit: PropTypes.func,
  submitData: PropTypes.func,
  onHide: PropTypes.func,
  show: PropTypes.bool,
  themeList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    descr: PropTypes.string,
    link: PropTypes.string,
  })),
  languageList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    descr: PropTypes.string,
    link: PropTypes.string,
  })),
  knowledgeList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })),
};

CareerFormModal = reduxForm({
  form: 'changeCareer',
  enableReinitialize: true,
  destroyOnUnmount: true,
})(CareerFormModal);

export default CareerFormModal;
