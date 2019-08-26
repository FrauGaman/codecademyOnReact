import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { reduxForm, reset } from 'redux-form';
import { postData } from '../../../scripts/changeData';
import { setLoading } from '../../../actions/dataStatus';
import FieldSignUp from './FieldSignUp';
import PreloaderMini from '../../Preloader/PreloaderMini';

function SignUpInnerModal({ handleSubmit, onHide, setShowLogIn, setShowSignUp, statusLoading, dataStatus, setConfirmAddress, setFormError, formError }) {
	const changeForm = () => {
		setShowLogIn(true);
		setShowSignUp(false);
		setFormError({});
	};

	useEffect(() => {
		statusLoading(true);
	}, []);

	const submitSignUp = (value, dispatch) => {
		const valueData = {
			...value,
			// phone: '+61-2-1234 5678',
			organizationName: 'Some name',
			address: 'Embassy Of The Russian Federation, 78 Canberra Ave, Griffith ACT, Australia',
			location: {
				areaName: '78 Canberra Ave',
				stateName: 'Griffith',
				stateAbbreviation: 'ACT',
			},
			verifyInfo: {
				returnUrl: '/',
			},
			role: 'USER',
		};
		postData('', valueData, statusLoading, 'http://localhost:3000/api/v0.7/users', setFormError)
			.then((res) => {
				if (res !== undefined) {
					setShowSignUp && setShowSignUp(false);
					setConfirmAddress(true);
				}
			})
			.then(() => {
				dispatch(reset('signUp'));
				if (setShowSignUp && Object.keys(formError).length) {
					onHide;
				}
			});
	};

	return(
		<React.Fragment>
			{
				!dataStatus.loading && <PreloaderMini />
			}
			<Form id="signUpForm" onSubmit={handleSubmit(submitSignUp)} className="auth__page__form">
				{
					!!Object.keys(formError).length && <div className="error__auth">{formError.message}</div>
				}
				<FieldSignUp />
				{
					onHide ?
						<a href={ null } onClick={() => changeForm()} className="form__auth__link">I have account</a>
						:
						<NavLink to={'/login'} className="form__auth__link">I have account</NavLink>
				}
				<div className="form__button">
					{
						onHide &&
						<Button className="form__button__close" variant="secondary" onClick={onHide}>Close</Button>
					}
					<Button className="form__button__submit" variant="primary" type="submit">Sign up</Button>
				</div>
			</Form>
		</React.Fragment>
	);
}

SignUpInnerModal.propTypes = {
	handleSubmit: PropTypes.func,
	onHide: PropTypes.func,
	setShowLogIn: PropTypes.func,
	setShowSignUp: PropTypes.func,
	statusLoading: PropTypes.func,
	dataStatus: PropTypes.shape({
		loading: PropTypes.bool,
		emptyData: PropTypes.bool,
	}),
	confirmAddress: PropTypes.bool,
	setConfirmAddress: PropTypes.func,
	setFormError: PropTypes.func,
	formError: PropTypes.object,
};

SignUpInnerModal = reduxForm({
	form: 'signUp',
	enableReinitialize: true,
	destroyOnUnmount: true,
})(SignUpInnerModal);

const mapStateToProps = state => ({
	userStatus: state.userStatusTasks,
	dataStatus: state.dataStatusTasks,
});

const mapStateToDispatch = dispatch => ({
	statusLoading: (loading) => {
		dispatch(setLoading(loading));
	},
});

export default connect(mapStateToProps, mapStateToDispatch)(SignUpInnerModal);
