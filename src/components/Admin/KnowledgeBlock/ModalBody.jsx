import React from 'react';
import {Form} from 'react-bootstrap';
import {Field} from 'redux-form';
import {FormInput} from '../ComponentsPieces/Forms/FromParts';
import {requiredField, stringValidator} from '../validator';

function ModalBody({handleSubmit}) {
	return(
		<Form id="knowledgeForm" onSubmit={handleSubmit(submitData)} >
			<Form.Group controlId="exampleForm.ControlInput1">
				<Form.Label>Knowledge</Form.Label>
				<Field name="name" component={FormInput} type="text" placeholder="item" validate={[requiredField, stringValidator]} />
			</Form.Group>
		</Form>
	)
}

export default ModalBody;
