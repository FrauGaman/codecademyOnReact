import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import './authPage.sass';
import userIsLogIn from '../../actions/userStatus';
import LogInInnerModal from './LogInModal/LoginInnerModal';
import { PATH } from '../../scripts/const';

function LoginPage({ title, userStatus, userIsLogIn, location }) {

	useEffect(() => {
		userIsLogIn(localStorage.getItem('accessToken'));
	}, []);

	const [formError, setFormError] = useState({});
	return (
		<React.Fragment>
			<Route exact path={`${PATH.LOGIN}`} render={() => (
				userStatus.login ? (
					location.state ? <Redirect to={location.state.from} />	:	<Redirect to={`${PATH.FIRST}`} />
					)
					: (
					<div  className="auth__page">
						<h3 className="auth__page__title">{title}</h3>
						<LogInInnerModal setFormError={setFormError} formError={formError} />
					</div>
				)
			)}
			/>
		</React.Fragment>
	);
}

LoginPage.propTypes = {
	title: PropTypes.string,
	userStatus: PropTypes.shape({
		login: PropTypes.bool,
	}),
	userIsLogIn: PropTypes.func,
	location: PropTypes.object,
};

const mapStateToProps = state => ({
	userStatus: state.userStatusTasks,
});

const mapStateToDispatch = dispatch => ({
	userIsLogIn: (token) => {
		dispatch(userIsLogIn(token));
	},
});

export default connect(mapStateToProps, mapStateToDispatch)(LoginPage);
