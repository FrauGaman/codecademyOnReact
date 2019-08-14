import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { reduxForm } from 'redux-form';

import FieldsLogin from './FieldsLogin';

function LogInInnerModal({ handleSubmit, onHide, submitLogin, setShowLogIn, setShowSignIn, isModal }) {
	const changeForm = () => {
		setShowLogIn(false);
		setShowSignIn(true);
	};
	return(
		<Form id="logInForm" onSubmit={handleSubmit(submitLogin)}>
			<FieldsLogin />
			<a href={ null } onClick={() => changeForm()}>I have an account</a>
			<div className="form__button">
				{
					isModal &&
						<Button className="form__button__close" variant="secondary" onClick={onHide}>Close</Button>
				}
				<Button className="form__button__submit" variant="primary" type="submit">LogIn</Button>
			</div>
		</Form>
	);
}

LogInInnerModal = reduxForm({
	form: 'logIn',
	enableReinitialize: true,
	destroyOnUnmount: true,
})(LogInInnerModal);

export default LogInInnerModal;
