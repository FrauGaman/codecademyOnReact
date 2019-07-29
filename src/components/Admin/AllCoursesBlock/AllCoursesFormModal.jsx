import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Form } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { FormInput, FormTextarea, FormSelector, FormMultiSelector } from '../Forms/FromParts';
import { requiredField, setMaxLength, stringValidator } from '../validator';

const maxL = setMaxLength(300);

function AllCoursesFormModal({ title, handleSubmit, submitData, onHide, show, themeList, languageList }) {
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
        <Form id="allCoursesForm" onSubmit={handleSubmit(submitData)} >
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Field name="title" component={FormInput} type="text" placeholder="Title" validate={[requiredField, stringValidator]} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Field name="descr" component={FormTextarea} placeholder="Descriptopn" validate={[requiredField, maxL]} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Importance</Form.Label>
            <Field name="importance" component={FormSelector} validate={[requiredField]} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Icon</Form.Label>
            <Field name="icon" component={FormInput} type="text" placeholder="Icon" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Border color</Form.Label>
            <Field name="borderColor" component={FormInput} type="text" placeholder="Border color" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Theme</Form.Label>
            <Field name="theme" component={FormMultiSelector} dataArr={themeList} validate={[requiredField]} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Language</Form.Label>
            <Field name="language" component={FormMultiSelector} dataArr={languageList} validate={[requiredField]} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
        <Button variant="primary" form="allCoursesForm" type="submit">Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
}

AllCoursesFormModal.propTypes = {
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
};

AllCoursesFormModal = reduxForm({
  form: 'changeAllCourses',
  enableReinitialize: true,
  destroyOnUnmount: true,
})(AllCoursesFormModal);

export default AllCoursesFormModal;
