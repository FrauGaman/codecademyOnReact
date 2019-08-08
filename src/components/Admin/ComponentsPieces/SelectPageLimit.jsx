import React from 'react';
import PropTypes from 'prop-types';

function SelectPageLimit({ limitNumber, selectLimitNumber }) {
  return (
    <select className="page__selector" value={limitNumber} onChange={selectLimitNumber}>
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="25">25</option>
    </select>
  );
}

SelectPageLimit.propTypes = {
  limitNumber: PropTypes.string,
  selectLimitNumber: PropTypes.func,
};

export default SelectPageLimit;
