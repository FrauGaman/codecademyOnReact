import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { FormInput } from '../ComponentsPieces/Forms/FromParts';
import { requiredField, stringValidator } from '../validator';

function KnowledgeModalInner({ handleSubmit, submitData, onHide }) {
	return (
		<Form id="knowledgeForm" onSubmit={handleSubmit(submitData)}>
			<Form.Group controlId="exampleForm.ControlInput1">
				<Form.Label>Knowledge</Form.Label>
				<Field
					name="name"
					component={FormInput}
					type="text"
					placeholder="item"
					validate={[requiredField, stringValidator]}
					useFocus={true}
				/>
			</Form.Group>
			<div className="form__button">
				<Button className="form__button__close" variant="secondary" onClick={onHide}>Close</Button>
				<Button className="form__button__submit" variant="primary" type="submit">Save changes</Button>
			</div>
		</Form>
	);
}

KnowledgeModalInner.propTypes = {
	handleSubmit: PropTypes.func,
	submitData: PropTypes.func,
	onHide: PropTypes.func,
};

KnowledgeModalInner = reduxForm({
	form: 'changeKnowledge',
	enableReinitialize: true,
	destroyOnUnmount: true,
})(KnowledgeModalInner);

export default KnowledgeModalInner;
