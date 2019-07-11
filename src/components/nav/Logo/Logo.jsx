import React from 'react';
import { ReactComponent as LogoIcon } from '../../../img/navLogo.svg';

import './logo.sass';

function Logo() {
  return (
    <a href="{null}">
      <LogoIcon className="logo__icon"/>
    </a>
  );
}

export default Logo;
