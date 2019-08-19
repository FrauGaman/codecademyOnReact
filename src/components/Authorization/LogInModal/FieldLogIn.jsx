import React from 'react';
import { Form } from 'react-bootstrap';
import { Field } from 'redux-form';
import { FormInput } from '../../Admin/ComponentsPieces/Forms/FromParts';
import { requiredField, stringValidator } from '../../Admin/validator';

function FieldLogIn() {
	return (
		<React.Fragment>
			<Form.Group>
				<Form.Label>Email</Form.Label>
				<Field name="login" component={FormInput} type="email" placeholder="Contact information" validate={[requiredField, stringValidator]} useFocus={true} />
			</Form.Group>
			<Form.Group>
				<Form.Label>Password</Form.Label>
				<Field name="password" component={FormInput} type="password" placeholder="Password" validate={[requiredField, stringValidator]} />
			</Form.Group>
		</React.Fragment>
	);
}

export default FieldLogIn;
