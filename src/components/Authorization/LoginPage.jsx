import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import './authPage.sass';
import { userIsLogIn } from '../../actions/userStatus';
import LogInInnerModal from './LogInModal/LoginInnerModal';

function LoginPage({ title, userIsLogIn, userStatus }) {

	useEffect(() => {
		userIsLogIn(localStorage.getItem('accessToken'));
	}, []);

	return (
		<React.Fragment>
			<Route exact path="/login" render={() => (
				userStatus.login ? (
					<Redirect to="/admin/career" />
				) : (
					<div>
						<h3 className="auth__page__title">{title}</h3>
						<LogInInnerModal />
					</div>
				)
			)}
			/>
		</React.Fragment>
	);
}

const mapStateToProps = state => ({
	userStatus: state.userStatusTasks,
});

const mapStateToDispatch = dispatch => ({
	userIsLogIn: (token) => {
		dispatch(userIsLogIn(token));
	},
});

export default connect(mapStateToProps, mapStateToDispatch)(LoginPage);
