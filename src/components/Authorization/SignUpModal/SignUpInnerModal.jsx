import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { reduxForm } from 'redux-form';
import {changeData, postData} from '../../../scripts/changeData';
import { connect } from 'react-redux';
import { setLoading } from '../../../actions/dataStatus';
import FieldSignUp from './FieldSignUp';
import PreloaderMini from '../../Preloader/PreloaderMini';
import { addUsersData, postUserData } from '../../../actions/userStatus';

function SignUpInnerModal({ handleSubmit, onHide, setShowLogIn, setShowSignUp, userStatus, statusLoading, dataStatus, setUsersList }) {
	const changeForm = () => {
		setShowLogIn(true);
		setShowSignUp(false);
	};

	useEffect(() => {
		statusLoading(true);
	}, []);

	const submitSignUp = value => {
		const valueData = {
			...value,
			// phone: '+61-2-1234 5678',
			organizationName: 'Some name',
			address: "Embassy Of The Russian Federation, 78 Canberra Ave, Griffith ACT, Australia",
			location: {
				areaName: '78 Canberra Ave',
				stateName: 'Griffith',
				stateAbbreviation: 'ACT',
			},
			verifyInfo: {
				returnUrl: "/",
			},
			role: "USER",
		};
		postData('', valueData, statusLoading, 'http://localhost:3000/api/v0.7/users' );
		setShowSignUp(false);
	};


	return(
		<React.Fragment>
			{
				!dataStatus.loading && <PreloaderMini />
			}
			{
				(!userStatus.signup) ?
					<Form id="signInForm" onSubmit={handleSubmit(submitSignUp)} className="auth__page__form">
						<FieldSignUp />
						{
							onHide ?
								<a href={ null } onClick={() => changeForm()}>I have no account</a>
								:
								<NavLink to={'/login'}>I have no account</NavLink>
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
					<div className="done__auth">You're already registered</div>
			}

		</React.Fragment>

	);
}

SignUpInnerModal = reduxForm({
	form: 'signIn',
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
