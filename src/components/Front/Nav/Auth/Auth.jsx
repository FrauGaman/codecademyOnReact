import React from 'react';
import './auth.sass';
import SignUpBtn from './SignUpBtn';

function Auth({ setShowLogIn, setShowSignUp }) {
  return (
    <div>
      <a href={null} className="logIn__btn" onClick={() => setShowLogIn(true)}>Log in</a>
      <SignUpBtn setShowSignUp={setShowSignUp} signUpBtnClass={'signUp__btn'} />
    </div>
  )
}

export default Auth;
