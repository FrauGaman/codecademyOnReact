import React from 'react';
import PropTypes from 'prop-types';
import {Form} from 'react-bootstrap';
import {Field, reduxForm} from 'redux-form';
import {FormInput} from '../ComponentsPieces/Forms/FromParts';
import {requiredField, stringValidator} from '../validator';

function KnowledgeModalInner({handleSubmit, submitData}) {
	return (
		<Form id="knowledgeForm" onSubmit={handleSubmit(submitData)}>
			<Form.Group controlId="exampleForm.ControlInput1">
				<Form.Label>Knowledge</Form.Label>
				<Field
					name="name"
					component={FormInput}
					type="text" placeholder="item"
					validate={[requiredField, stringValidator]}
				/>
			</Form.Group>
		</Form>
	)
}

KnowledgeModalInner.propTypes = {
	handleSubmit: PropTypes.func,
	submitData: PropTypes.func,
};

KnowledgeModalInner = reduxForm({
	form: 'changeKnowledge',
	enableReinitialize: true,
	destroyOnUnmount: true,
})(KnowledgeModalInner);

export default KnowledgeModalInner;
