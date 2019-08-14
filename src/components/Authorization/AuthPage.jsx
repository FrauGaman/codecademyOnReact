import React from 'react';
import { Form } from 'react-bootstrap';
import './authPage.sass';

function AuthPage({ title, children }) {
	return (
		<React.Fragment>
			<h1 className="auth__page__title">{ title }</h1>
			<Form className="auth__page__form">
				{ children }
			</Form>
		</React.Fragment>
	);
}

export default AuthPage;
