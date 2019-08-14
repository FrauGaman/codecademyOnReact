import React from 'react';
import PropTypes from 'prop-types';

function SignUpBtn({ signUpBtnClass, setShowSignIn }) {
  return (
    <button className={signUpBtnClass} onClick={() => setShowSignIn(true)}>Sign up</button>
  );
}
SignUpBtn.propTypes = {
  signUpBtnClass: PropTypes.string,
}
export default SignUpBtn;
