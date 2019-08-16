import React from 'react';
import {Col, Form, Row} from 'react-bootstrap';
import {Field} from 'redux-form';
import {FormInput} from '../../Admin/ComponentsPieces/Forms/FromParts';
import {requiredField, stringValidator, match, setMinLength, setMaxLength} from '../../Admin/validator';

const minL = setMinLength(5);
const maxL = setMaxLength(30);
const maxLEmail = setMaxLength(250);

function FieldSignUp() {
	return (
		<React.Fragment>
			<Form.Group>
				<Form.Label>First Name</Form.Label>
				<Field name="firstName" component={FormInput} type="text" placeholder="First Name" validate={[requiredField, stringValidator, maxL]} useFocus={true} />
			</Form.Group>
			<Form.Group>
				<Form.Label>Last Name</Form.Label>
				<Field name="lastName" component={FormInput} type="text" placeholder="Last Name" validate={[requiredField, stringValidator, maxL]} />
			</Form.Group>
			<Form.Group>
				<Form.Label>Email</Form.Label>
				<Field name="email" component={FormInput} type="email" placeholder="Contact information" validate={[requiredField, stringValidator, maxLEmail]} />
			</Form.Group>
			<Form.Group>
				<Form.Label>Password</Form.Label>
				<Row>
					<Col>
						<Field name="password" component={FormInput} type="password" placeholder="Password" validate={[requiredField, minL]} />
					</Col>
					<Col>
						<Field name="confirmPassword" component={FormInput} type="password" placeholder="Confirm password" validate={[requiredField, match('password')]} />
					</Col>
				</Row>
			</Form.Group>
		</React.Fragment>
	);
}

export default FieldSignUp;
