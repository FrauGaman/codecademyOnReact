import React from 'react';
import './logo.sass';
import Image from '../../../img/navLogo.svg';

function Logo() {
  return(
    <div >
      <a href="#">
        <img src={Image} alt="" height="27.5" width="128.5"/>
      </a>
    </div>
  )
}

export default Logo
