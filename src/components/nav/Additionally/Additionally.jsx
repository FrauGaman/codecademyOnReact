import React from 'react';
import PropTypes from 'prop-types';
import './additionally.sass';
import { ReactComponent as SearchIcon } from '../../../img/icons/SearchIcon.svg';
import UpgradeBtn from './UpgradeBtn';

function Additionally({ showSearch }) {
  return (
    <div className="additionally">
      <UpgradeBtn />
      <SearchIcon className="searchIcon" onClick={showSearch} />
    </div>
  );
}
Additionally.propTypes = {
  showSearch: PropTypes.func,
}

export default Additionally;
