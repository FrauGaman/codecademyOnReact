import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { FormInput, FormTextarea } from '../ComponentsPieces/Forms/FromParts';
import { linkValidator, requiredField, setMaxLength, stringValidator } from '../validator';

const maxL = setMaxLength(300);

function LanguageModalInner({ handleSubmit, submitData, onHide }) {
	return (
		<Form id="languageForm" onSubmit={handleSubmit(submitData)}>
			<Form.Group controlId="exampleForm.ControlInput1">
				<Form.Label>Name</Form.Label>
				<Field name="name" component={FormInput} type="text" placeholder="Name" validate={[requiredField, stringValidator]} useFocus={true} />
			</Form.Group>
			<Form.Group controlId="exampleForm.ControlTextarea1">
				<Form.Label>Description</Form.Label>
				<Field name="descr" component={FormTextarea} placeholder="Descriptopn" validate={[requiredField, maxL]} useFocus={false} />
			</Form.Group>
			<Form.Group controlId="exampleForm.ControlInput1">
				<Form.Label>Link</Form.Label>
				<Field name="link" component={FormInput} type="text" placeholder="/link" validate={[requiredField, linkValidator]} useFocus={false} />
			</Form.Group>
			<div className="form__button">
				<Button className="form__button__close" variant="secondary" onClick={onHide}>Close</Button>
				<Button className="form__button__submit" variant="primary" type="submit">Save changes</Button>
			</div>
		</Form>
	);
}

LanguageModalInner.propTypes = {
	handleSubmit: PropTypes.func,
	submitData: PropTypes.func,
	onHide: PropTypes.func,
};

LanguageModalInner = reduxForm({
	form: 'changeLanguage',
	enableReinitialize: true,
	destroyOnUnmount: true,
})(LanguageModalInner);

export default LanguageModalInner;
