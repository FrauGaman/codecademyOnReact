import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './authPage.sass';
import userIsLogIn from '../../actions/userStatus';
import SignUpInnerModal from './SignUpModal/SignUpInnerModal';
import ModalWindow from '../ModalWindow';
import ConfirmModal from './SignUpModal/ConfirmModal';

function SignUpPage({ title }) {
	const [confirmAddress, setConfirmAddress] = useState(false);
	const [formError, setFormError] = useState({});

	return (
		<React.Fragment>
			(
				<div className="auth__page">
					<h3 className="auth__page__title">{title}</h3>
					<ModalWindow show={confirmAddress} title="Сonfirmation required" onHide={() => setConfirmAddress(false)}>
						<ConfirmModal />
					</ModalWindow>
					<SignUpInnerModal confirmAddress={confirmAddress} setConfirmAddress={setConfirmAddress} setFormError={setFormError} formError={formError} />
				</div>
			)
			)}
			/>
		</React.Fragment>
	);
}

SignUpPage.propTypes = {
	title: PropTypes.string,
};

const mapStateToProps = state => ({
	userStatus: state.userStatusTasks,
	lastLocation: state.locationTasks,
});

const mapStateToDispatch = dispatch => ({
	userIsLogIn: (token) => {
		dispatch(userIsLogIn(token));
	},
});

export default connect(mapStateToProps, mapStateToDispatch)(SignUpPage);
