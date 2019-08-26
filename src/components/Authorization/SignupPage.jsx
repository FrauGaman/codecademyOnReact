import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import './authPage.sass';
import userIsLogIn from '../../actions/userStatus';
import SignUpInnerModal from './SignUpModal/SignUpInnerModal';
import ModalWindow from '../ModalWindow';
import ConfirmModal from './SignUpModal/ConfirmModal';

function SignUpPage({ title, history, match }) {
	const [confirmAddress, setConfirmAddress] = useState(false);
	const [formError, setFormError] = useState({});
	const [redirect, setRedirect] = useState(false);
	const closeConfirmModal = () => {
		setConfirmAddress(false);
		setRedirect(true);
	};


	const saveHistory = () => {
		return history.push(match.url)
	};
	console.log(history);

	return (
		<React.Fragment>
			{/*<Route exact path="/signup" render={() => (*/}
			{/*	redirect ? (*/}
			{/*			<Redirect to={lastLocation} />*/}
			{/*		) :*/}
					(
						<div className="auth__page">
							<h3 className="auth__page__title">{title}</h3>
							<ModalWindow show={confirmAddress} title="Сonfirmation required" onHide={() => closeConfirmModal()}>
								<ConfirmModal />
							</ModalWindow>
							<SignUpInnerModal confirmAddress={confirmAddress} setConfirmAddress={setConfirmAddress} setFormError={setFormError} formError={formError} />
							<button onClick={() => saveHistory()}>lololo</button>
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
