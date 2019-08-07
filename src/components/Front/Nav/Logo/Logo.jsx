import React from 'react';
import LogoIcon from '../../../Icons/Icons';
import './logo.sass';

function Logo() {
  return (
    <a href={null}>
      <LogoIcon iconName={'logo'} className={'logo__icon'} />
    </a>
  );
}

export default Logo;
