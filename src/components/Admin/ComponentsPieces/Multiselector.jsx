import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

function MultiSelect({options, className, onChange}) {
  return (
    <Select options={options} isMulti className={className} onChange={onChange} isSearchable={false} />
  );
}

MultiSelect.propTypes = {
  options: PropTypes.array,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

export default MultiSelect;
