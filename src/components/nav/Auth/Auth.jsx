import React from 'react';
import './auth.sass';

import SignUpBtn from './SignUpBtn'

function Auth() {
  return (
    <div>
      <a href="#" className="logIn__btn">Log in</a>
      <SignUpBtn SignUpBtnClass={"signUp__btn"}/>
    </div>
  )
}

export default Auth