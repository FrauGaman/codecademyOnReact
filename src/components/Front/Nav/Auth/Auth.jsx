import React from 'react';
import './auth.sass';
import SignUpBtn from './SignUpBtn';

function Auth({ setShowLogIn, setShowSignIn }) {
  return (
    <div>
      <a href={null} className="logIn__btn" onClick={() => setShowLogIn(true)}>Log in</a>
      <SignUpBtn setShowSignIn={setShowSignIn} signUpBtnClass={'signUp__btn'} />
    </div>
  )
}

export default Auth;
