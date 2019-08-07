import React from 'react';
import PropTypes from 'prop-types';

function SignUpBtn({ signUpBtnClass }) {
  return (
    <button className={signUpBtnClass}>Sign up</button>
  );
}
SignUpBtn.propTypes = {
  signUpBtnClass: PropTypes.string,
}
export default SignUpBtn;
