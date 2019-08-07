import React from 'react';
import PropTypes from 'prop-types';
import {Button, Modal} from 'react-bootstrap';

function ModalWindow({ children, formname, title, onHide, show }) {
	return (
		<Modal
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
			show={show}
			onHide={onHide}
			title={title}
			formname={formname}
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					{title}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{children}
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={onHide}>Close</Button>
				<Button variant="primary" form={formname} type="submit">Save changes</Button>
			</Modal.Footer>
		</Modal>
	);
}

ModalWindow.propTypes = {
	children: PropTypes.node,
	formname: PropTypes.string,
	title: PropTypes.string,
	onHide: PropTypes.func,
	show: PropTypes.bool,
	submitData: PropTypes.func,
};

export default ModalWindow;
