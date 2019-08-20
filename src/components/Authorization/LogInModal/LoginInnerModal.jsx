import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { reduxForm } from 'redux-form';
import FieldLogIn from './FieldLogIn';
import { getToken } from '../../../scripts/changeData';
import { setLoading } from '../../../actions/dataStatus';
import userIsLogIn from '../../../actions/userStatus';
import '../authStyle.sass';
import PreloaderMini from '../../Preloader/PreloaderMini';

function LogInInnerModal({
	 handleSubmit,
	 onHide,
	 setShowLogIn,
	 setShowSignUp,
	 statusLoading,
	 userIsLogIn,
	 dataStatus,
	 userStatus,
	 setFormError,
	 formError,
}) {
	const changeForm = () => {
		setShowLogIn(false);
		setShowSignUp(true);
		setFormError({});
	};
	useEffect(() => {
		statusLoading(true);
		userIsLogIn(localStorage.getItem('accessToken'));
	}, []);

	const submitLogin = value => {
		const valueData = {
			...value,
			meta: {
				deviceId: 'string',
				versionApp: 'string',
				platform: 'string',
			},
		};
		getToken('http://localhost:3000/api/v0.7/auth/token', valueData, statusLoading, setFormError)
			.then((res) =>  {
				if (res !== undefined) {
					userIsLogIn(res.data.accessToken);
					setShowLogIn && setShowLogIn(false);
				}
			})
			.then(() => {
				if (Object.keys(formError).length) {
					setFormError({});
				}
			});
	};

	return (
		<React.Fragment>
			{
				!dataStatus.loading && <PreloaderMini />
			}
			{
				!userStatus.login ?
					<div>
						<Form id="logInForm" onSubmit={handleSubmit(submitLogin)} className="auth__page__form">
							{
								!!Object.keys(formError).length && <div className="error__auth">{formError.message}</div>
							}
							<FieldLogIn />
							{onHide ?
								<a href={ null } onClick={() => changeForm()} className="form__auth__link">I have no account</a>
								:
								<NavLink to={'/signup'} className="form__auth__link">I have no account</NavLink>}
							<div className="form__button">
								{onHide &&
								<Button className="form__button__close" variant="secondary" onClick={onHide}>Close</Button>}
								<Button className="form__button__submit" variant="primary" type="submit">LogIn</Button>
							</div>
						</Form>
					</div>
					:
					<div>Нou have already registered</div>
			}

		</React.Fragment>
	);
}

LogInInnerModal.propTypes = {
	handleSubmit: PropTypes.func,
	onHide: PropTypes.func,
	setShowLogIn: PropTypes.func,
	setShowSignUp: PropTypes.func,
	statusLoading: PropTypes.func,
	userIsLogIn: PropTypes.func,
	dataStatus: PropTypes.shape({
		loading: PropTypes.bool,
		emptyData: PropTypes.bool,
	}),
	userStatus: PropTypes.shape({
		login: PropTypes.bool,
	}),
	setFormError: PropTypes.func,
	formError: PropTypes.object,
};

LogInInnerModal = reduxForm({
	form: 'logIn',
	enableReinitialize: true,
	destroyOnUnmount: true,
})(LogInInnerModal);

const mapStateToProps = state => ({
	userStatus: state.userStatusTasks,
	dataStatus: state.dataStatusTasks,
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
