import React  from 'react';
import { connect } from 'react-redux';
import './authPage.sass';
import { userIsLogIn } from '../../actions/userStatus';
import SignUpInnerModal from './SignUpModal/SignUpInnerModal';

function SignUpPage({ title }) {
	return (
		<React.Fragment>
			<div>
				<h3 className="auth__page__title">{title}</h3>
				<SignUpInnerModal />
			</div>
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

export default connect(mapStateToProps, mapStateToDispatch)(SignUpPage);
