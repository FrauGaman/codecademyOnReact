import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MultiSelect from '../ComponentsPieces/Multiselector';

function AllCoursesFilterSelect({ themeList, languageList, filterState }) {
  const [themeValue, setThemeValue] = useState([]);
  const [languageValue, setLanguageValue] = useState([]);
  const filterArr = [];
  let filterStr = '';

  useEffect(() => {
    (themeValue !== null) && themeValue.map(item => filterArr.push(`theme=${item.value}`));
    (languageValue !== null) && languageValue.map(item => filterArr.push(`language=${item.value}`));
    filterStr = filterArr.join('&');
    filterState(filterStr);
  }, [themeValue, languageValue]);

  const selectedThemeValue = (value) => setThemeValue(value);
  const selectedLanguageValue = (value) => setLanguageValue(value);
  const themeOptions = themeList.data && themeList.data.map(item => { return { value: item.id, label: item.name }});
  const languageOptions = languageList.data && languageList.data.map(item => { return { value: item.id, label: item.name }});

  return (
    <React.Fragment>
      <div className="filter__title">Filter</div>
      <div className="params__selector__block">
        <div>
          <div>Theme</div>
          <MultiSelect options={themeOptions} className={'params__selector'} onChange={selectedThemeValue} />
        </div>
        <div>
          <div>Language</div>
          <MultiSelect options={languageOptions} className={'params__selector'} onChange={selectedLanguageValue} />
        </div>
      </div>
    </React.Fragment>
  );
}

AllCoursesFilterSelect.propTypes = {
  themeList: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      descr: PropTypes.string,
      link: PropTypes.string,
    })),
    count: PropTypes.string,
  }),
  languageList: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      descr: PropTypes.string,
      link: PropTypes.string,
    })),
    count: PropTypes.string,
  }),
  filterState: PropTypes.func,
};

export default AllCoursesFilterSelect;
