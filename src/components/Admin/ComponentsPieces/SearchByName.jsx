import React, { useState } from 'react';
import PropTypes from 'prop-types';

function SearchByName({ searchState }) {
  const [ nameValue, setNameValue ] = useState('');

  const filterByName = (event) => {
    setNameValue(event.target.value);
  };

  return (
    <div className="search__block">
        <label className="search__block__label">
            Search
            <input type="text" value={nameValue} onChange={filterByName} onKeyPress={(event) => (event.charCode === 13) && searchState(nameValue)} className="search__block__input" />
        </label>
        <button onClick={() => searchState(nameValue)} className="search__block__button" >Search</button>
    </div>
  )
}

SearchByName.propTypes = {
  searchState: PropTypes.func,
};

export default SearchByName;
