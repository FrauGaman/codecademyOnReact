import React from 'react';
import PropTypes from 'prop-types';
import UpgradeBtn from './UpgradeBtn';
import SearchIcon from '../../../Icons/Icons';
import './additionally.sass';

function Additionally({ showSearch }) {
  return (
    <div className="additionally">
      <UpgradeBtn />
      <div className="icon__wrapper" onClick={showSearch}>
        <SearchIcon iconName="searchIcon" className={'search__icon_small'} />
      </div>
    </div>
  );
}

Additionally.propTypes = {
  showSearch: PropTypes.func,
};

export default Additionally;
