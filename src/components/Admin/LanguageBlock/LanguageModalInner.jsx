import React from 'react';
import PropTypes from 'prop-types';
import {Form} from 'react-bootstrap';
import {Field, reduxForm} from 'redux-form';
import {FormInput, FormTextarea} from '../ComponentsPieces/Forms/FromParts';
import {linkValidator, requiredField, setMaxLength, stringValidator} from '../validator';

const maxL = setMaxLength(300);

function LanguageModalInner({handleSubmit, submitData}) {
	return (
		<Form id="languageForm" onSubmit={handleSubmit(submitData)}>
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
		</Form>
	);
}

LanguageModalInner.propTypes = {
	handleSubmit: PropTypes.func,
	submitData: PropTypes.func,
};

LanguageModalInner = reduxForm({
	form: 'changeLanguage',
	enableReinitialize: true,
	destroyOnUnmount: true,
})(LanguageModalInner);

export default LanguageModalInner;