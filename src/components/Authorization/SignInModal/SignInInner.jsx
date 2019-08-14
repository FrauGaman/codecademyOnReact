import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { reduxForm } from 'redux-form';
import FieldsSignin from './FieldsSignin';

function SignInInnerModal({ handleSubmit, onHide, submitSignin, setShowLogIn, setShowSignIn }) {
	const changeForm = () => {
		setShowLogIn(true);
		setShowSignIn(false);
	};
	return(
		<Form id="signInForm" onSubmit={handleSubmit(submitSignin)}>
			<FieldsSignin />
			<a href={ null } onClick={() => changeForm()}>I have no account</a>
			<div className="form__button">
				<Button className="form__button__close" variant="secondary" onClick={onHide}>Close</Button>
				<Button className="form__button__submit" variant="primary" type="submit">LogIn</Button>
			</div>
		</Form>
	);
}

SignInInnerModal = reduxForm({
	form: 'signIn',
	enableReinitialize: true,
	destroyOnUnmount: true,
})(SignInInnerModal);

export default SignInInnerModal;
