import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoIcon from '../../../Icons/Icons';
import './logo.sass';

function Logo() {
  return (
    <NavLink exact to={'/'}>
      <LogoIcon iconName={'logo'} className={'logo__icon'} />
    </NavLink>
  );
}

export default Logo;
