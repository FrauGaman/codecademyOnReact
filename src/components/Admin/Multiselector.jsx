import React from 'react';
import Select from 'react-select';

function MultiSelect({options, className}) {
  return (
    <Select options={options} isMulti className={className} />
  )
}

export default MultiSelect;
