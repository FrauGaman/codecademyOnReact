import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { FormInput, FormTextarea } from '../ComponentsPieces/Forms/FromParts';
import { linkValidator, requiredField, setMaxLength, stringValidator } from '../validator';

const maxL = setMaxLength(300);

function ThemeModalInner({handleSubmit, submitData, onHide}) {
	return (
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
			<div className="form__button">
				<Button className="form__button__close" variant="secondary" onClick={onHide}>Close</Button>
				<Button className="form__button__submit" variant="primary" type="submit">Save changes</Button>
			</div>
		</Form>
	)
}

ThemeModalInner.propTypes = {
	handleSubmit: PropTypes.func,
	submitData: PropTypes.func,
	onHide: PropTypes.func,
};

ThemeModalInner = reduxForm({
	form: 'changeTheme',
	enableReinitialize: true,
	destroyOnUnmount: true,
})(ThemeModalInner);

export default ThemeModalInner;
