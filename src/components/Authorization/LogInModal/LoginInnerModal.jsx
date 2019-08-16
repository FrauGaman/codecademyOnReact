import React, { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { reduxForm } from 'redux-form';
import FieldLogIn from './FieldLogIn';
import { getToken } from '../../../scripts/changeData';
import { setLoading } from '../../../actions/dataStatus';
import { userIsLogIn } from '../../../actions/userStatus';
import './loginForm.sass';

function LogInInnerModal({ handleSubmit, onHide, setShowLogIn, setShowSignIn, statusLoading, userIsLogIn }) {
	const [errorAuthData, setErrorAuthData] = useState(false);
	const [notConfirm, setNotConfirm] = useState(false);
	const [blockedUser, setBlockedUser] = useState(false);
	const [notFoundData, setNotFoundData] = useState(false);
	const changeForm = () => {
		setShowLogIn(false);
		setShowSignIn(true);
	};

	const submitLogin = value => {
		const valueData = {
			...value,
			meta: {
				deviceId: 'string',
				versionApp: 'string',
				platform: 'string',
			},
		};
		getToken('http://localhost:3000/api/v0.7/auth/token', valueData, statusLoading, setErrorAuthData, setNotConfirm, setBlockedUser, setNotFoundData).then((res) => (res !== undefined) && userIsLogIn(res.data.accessToken));
		if (setShowLogIn) {
			setShowLogIn(false);
		}
	};

	return (
		<React.Fragment>
			{errorAuthData && <div className="error__401">User doesn't exist or password is wrong</div>}
			{notConfirm && <div className="error__401">User is not confirmed</div>}
			{blockedUser && <div className="error__401">User is blocked</div>}
			{notFoundData && <div className="error__401">Resource is not found</div>}

			<Form id="logInForm" onSubmit={handleSubmit(submitLogin)} className="auth__page__form">
				<FieldLogIn />
				{onHide ?
					<a href={ null } onClick={() => changeForm()}>I have an account</a>
					:
					<NavLink to={'/signup'}>I have no account</NavLink>}
				<div className="form__button">
					{onHide &&
					<Button className="form__button__close" variant="secondary" onClick={onHide}>Close</Button>}
					<Button className="form__button__submit" variant="primary" type="submit">LogIn</Button>
				</div>
			</Form>
		</React.Fragment>

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

const mapStateToDispatch = dispatch => ({
	statusLoading: (loading) => {
		dispatch(setLoading(loading));
	},
	userIsLogIn: (token) => {
		dispatch(userIsLogIn(token));
	},
});

export default connect(mapStateToProps, mapStateToDispatch)(LogInInnerModal);
