import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { reduxForm } from 'redux-form';
import FieldLogIn from '../LogInModal/FieldLogIn';
import {connect} from 'react-redux';

function LogInInnerModal({ userStatus, handleSubmit, onHide, setShowLogIn, setShowSignIn }) {
	const changeForm = () => {
		setShowLogIn(false);
		setShowSignIn(true);
	};

	const submitLogin = value => {
		console.log(value);
		setShowLogIn(false);
	};
	return(
		(!userStatus.login) ?
		<Form id="logInForm" onSubmit={handleSubmit(submitLogin)} className="auth__page__form">
			<FieldLogIn />
			{
				onHide ?
					<a href={ null } onClick={() => changeForm()}>I have an account</a>
					:
					<NavLink to={'/signup'}>I have account</NavLink>
			}

			<div className="form__button">
				{
					onHide &&
						<Button className="form__button__close" variant="secondary" onClick={onHide}>Close</Button>
				}
				<Button className="form__button__submit" variant="primary" type="submit">LogIn</Button>
			</div>
		</Form>
			:
			<div className="done__auth">You're already logged in</div>
	);
}

LogInInnerModal = reduxForm({
	form: 'logIn',
	enableReinitialize: true,
	destroyOnUnmount: true,
})(LogInInnerModal);

const mapStateToProps = state => ({
	userStatus: state.userStatusTasks,
});

export default connect(mapStateToProps)(LogInInnerModal);
