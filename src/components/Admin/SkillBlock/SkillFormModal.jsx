import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Form } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { FormInput, FormTextarea, FormMultiSelector } from '../Forms/FromParts';

function SkillFormModal({ title, handleSubmit, submitData, onHide, show, themeList, languageList }) {
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
        <Form id="skillForm" onSubmit={handleSubmit(submitData)}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Field name="title" component={FormInput} type="text" placeholder="Title" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Field name="descr" component={FormTextarea} placeholder="Descriptopn" />
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
            <Field name="theme" component={FormMultiSelector} dataArr={themeList} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Language</Form.Label>
            <Field name="language" component={FormMultiSelector} dataArr={languageList} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Period</Form.Label>
            <Field name="period" component={FormInput} type="text" placeholder="Period" />
          </Form.Group>

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
        <Button variant="primary" form="skillForm" type="submit">Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
}

SkillFormModal.propTypes = {
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

SkillFormModal = reduxForm({
  form: 'changeSkill',
  enableReinitialize: true,
  destroyOnUnmount: true,
})(SkillFormModal);

export default SkillFormModal;
