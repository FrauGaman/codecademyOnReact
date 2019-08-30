import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoIcon from '../../../Icons/Icons';
import './logo.sass';
import { PATH } from '../../../../scripts/const';

function Logo() {
  return (
    <NavLink exact to={`${PATH.FIRST}`}>
      <LogoIcon iconName={'logo'} className={'logo__icon'} />
    </NavLink>
  );
}

export default Logo;
