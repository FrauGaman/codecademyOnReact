import React from 'react';
import PropTypes from 'prop-types';

function SignUpBtn({ signUpBtnClass, setShowSignUp }) {
  return (
    <button className={signUpBtnClass} onClick={() => setShowSignUp(true)}>Sign up</button>
  );
}
SignUpBtn.propTypes = {
  signUpBtnClass: PropTypes.string,
}
export default SignUpBtn;
