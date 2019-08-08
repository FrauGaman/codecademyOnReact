import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

function ModalWindow({ children, title, onHide, show }) {
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
				{children}
			</Modal.Body>
		</Modal>
	);
}

ModalWindow.propTypes = {
	children: PropTypes.node,
	title: PropTypes.string,
	onHide: PropTypes.func,
	show: PropTypes.bool,
};

export default ModalWindow;
