import React, { useState } from 'react';
import PropTypes from 'prop-types';

function SearchByName({ searchState }) {
  const [ nameValue, setNameValue ] = useState('');

  const filterByName = (event) => {
    setNameValue(event.target.value);
  };

  return (
    <React.Fragment>
      <label>
        Search
        <input type="text" value={nameValue} onChange={filterByName} onKeyPress={(event) => (event.charCode === 13) && searchState(nameValue)} />
      </label>
      <button onClick={() => searchState(nameValue)} >Search</button>
    </React.Fragment>
  )
}

SearchByName.propTypes = {
  searchState: PropTypes.func,
};

export default SearchByName;
