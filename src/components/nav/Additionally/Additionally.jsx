import React from 'react';
import './additionally.sass';
import Icons from '../../Icons';
import UpgradeBtn from './UpgradeBtn';

function Additionally(props) {
  return (
    <div className="additionally">
      <UpgradeBtn/>
      <div className="search__btn" onClick={props.showSearch}>
        <Icons iconId={'searchIcon'} height={24} width={24} color={'#828285'}/>
      </div>
    </div>
  );
}

export default Additionally;
