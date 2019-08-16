import React  from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { reduxForm } from 'redux-form';
import { postData} from '../../../scripts/changeData';
import { connect } from 'react-redux';
import { setLoading } from '../../../actions/dataStatus';
import FieldSignUp from './FieldSignUp';
import PreloaderMini from '../../Preloader/PreloaderMini';

function SignUpInnerModal({ handleSubmit, onHide, setShowLogIn, setShowSignUp, statusLoading, dataStatus }) {
	const changeForm = () => {
		setShowLogIn(true);
		setShowSignUp(false);
	};

	dataStatus.loading = true;

	const submitSignUp = value => {
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
		postData('', valueData, statusLoading, 'http://localhost:3000/api/v0.7/users' );
		if(setShowSignUp) {
			setShowSignUp(false);
		}
	};

	return(
		<React.Fragment>
			<Form id="signInForm" onSubmit={handleSubmit(submitSignUp)} className="auth__page__form">
				<FieldSignUp />
				{
					onHide ?
						<a href={ null } onClick={() => changeForm()}>I have account</a>
						:
						<NavLink to={'/login'}>I have account</NavLink>
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
