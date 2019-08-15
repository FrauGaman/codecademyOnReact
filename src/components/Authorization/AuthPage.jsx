import React from 'react';
import './authPage.sass';

function AuthPage({ title, children }) {
	return (
		<React.Fragment>
			<h1 className="auth__page__title">{ title }</h1>
			{ children }
		</React.Fragment>
	);
}

export default AuthPage;
