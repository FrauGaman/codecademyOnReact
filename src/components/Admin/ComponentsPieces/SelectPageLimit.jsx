import React from 'react';

function SelectPageLimit({ limitNumber, selectLimitNumber }) {
  return(
    <select className="page__selector" value={limitNumber} onChange={selectLimitNumber}>
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="25">25</option>
    </select>
  )
}

export default SelectPageLimit;
