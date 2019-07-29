import React from 'react';
import Select from 'react-select';

function MultiSelect({options, className, onChange }) {
  return (
    <Select options={options} isMulti className={className} onChange={onChange} isSearchable={false} />
  )
}

export default MultiSelect;
