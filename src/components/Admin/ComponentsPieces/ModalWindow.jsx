import React from 'react';
import {Button, Form, Modal} from 'react-bootstrap';
import {Field} from 'redux-form';
import {FormInput} from './Forms/FromParts';
import {requiredField, stringValidator} from '../validator';

function ModalWindow() {
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
				<Form id="knowledgeForm" onSubmit={handleSubmit(submitData)} >
					<Form.Group controlId="exampleForm.ControlInput1">
						<Form.Label>Knowledge</Form.Label>
						<Field name="name" component={FormInput} type="text" placeholder="item" validate={[requiredField, stringValidator]} />
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={onHide}>Close</Button>
				<Button variant="primary" form="knowledgeForm" type="submit">Save changes</Button>
			</Modal.Footer>

		</Modal>
	)
}

export default ModalWindow;
