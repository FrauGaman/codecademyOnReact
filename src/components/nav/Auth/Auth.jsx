import React from 'react';
import './auth.sass';
import SignUpBtn from './SignUpBtn';

function Auth() {
  return (
    <div>
      <a href="{null}" className="logIn__btn">Log in</a>
      <SignUpBtn signUpBtnClass={'signUp__btn'} />
    </div>
  )
}

export default Auth;
