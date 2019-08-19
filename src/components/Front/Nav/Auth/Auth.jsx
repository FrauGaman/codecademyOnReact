import React from 'react';
import PropTypes from 'prop-types';
import './auth.sass';
import SignUpBtn from './SignUpBtn';

function Auth({ setShowLogIn, setShowSignUp, userStatus, userIsLogIn }) {
  const logOut = () => {
    localStorage.clear();
    userIsLogIn(localStorage.getItem('accessToken'));
  };
  return (
    <div >
      {
        !userStatus.login ?
          <div>
            <a href={null} className="logIn__btn" onClick={() => setShowLogIn(true)}>Log in</a>
            <SignUpBtn setShowSignUp={setShowSignUp} signUpBtnClass={'signUp__btn'} />
          </div>
        :
        <div className="auth__box">
          <a href={null} className="logIn__btn" onClick={() => logOut()}>Log out</a>
          <div className="user__login__box">
            <img src="/img/nav/user.png" alt="" className="user__login" />
            <div>{`${localStorage.getItem('userFirstName')} ${localStorage.getItem('userLastName')}`}</div>
          </div>
        </div>
      }
    </div>
  );
}

Auth.propTypes = {
  setShowLogIn: PropTypes.func,
  setShowSignUp: PropTypes.func,
  userStatus: PropTypes.object,
  userIsLogIn: PropTypes.func,
};

export default Auth;
