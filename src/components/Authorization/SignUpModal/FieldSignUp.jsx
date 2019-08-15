import React from 'react';
import {Col, Form, Row} from 'react-bootstrap';
import {Field} from 'redux-form';
import {FormInput} from '../../Admin/ComponentsPieces/Forms/FromParts';
import {requiredField, stringValidator} from '../../Admin/validator';

function FieldSignUp() {
	return (
		<React.Fragment>
			<Form.Group>
				<Form.Label>First Name</Form.Label>
				<Field name="firstName" component={FormInput} type="text" placeholder="First Name" validate={[requiredField, stringValidator]} useFocus={true} />
			</Form.Group>
			<Form.Group>
				<Form.Label>Last Name</Form.Label>
				<Field name="lastName" component={FormInput} type="text" placeholder="Last Name" validate={[requiredField, stringValidator]} />
			</Form.Group>
			<Row>
				<Col>
					<Form.Group>
						<Form.Label>Email</Form.Label>
						<Field name="email" component={FormInput} type="email" placeholder="Contact information" validate={[requiredField, stringValidator]} />
					</Form.Group>
				</Col>
				<Col>
					<Form.Group>
						<Form.Label>Address</Form.Label>
						<Field name="address" component={FormInput} type="text" placeholder="Address" validate={[requiredField, stringValidator]} />
					</Form.Group>
				</Col>
			</Row>
			<Form.Group>
				<Form.Label>Password</Form.Label>
				<Row>
					<Col>
						<Field name="password" component={FormInput} type="password" placeholder="Password" validate={[requiredField, stringValidator]} />
					</Col>
					<Col>
						<Field name="confirmPassword" component={FormInput} type="password" placeholder="Confirm password" validate={[requiredField, stringValidator]} />
					</Col>
				</Row>
			</Form.Group>
		</React.Fragment>
	);
}

export default FieldSignUp;
