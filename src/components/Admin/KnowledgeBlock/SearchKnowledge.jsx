import React, { useState } from 'react';

function SearchByName({ filterDataByName }) {
  const [ nameValue, setNameValue ] = useState('')
  const filterByName = (event) => {
    setNameValue(event.target.value);
  };
  const submitChanges = (nameValue) => {
    filterDataByName(nameValue);
  };
  return (
    <React.Fragment>
      <label>
        Search
        <input type="text" value={nameValue} onChange={filterByName} />
      </label>
      <button onClick={() => submitChanges(nameValue)}>Search</button>
    </React.Fragment>
  )
}

export default SearchByName;
