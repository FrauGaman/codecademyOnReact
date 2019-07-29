import React, { useState, useEffect } from 'react';
import MultiSelect from '../Multiselector';

function AllCoursesFilterSelect({ themeList, languageList, filterCoursesData }) {
  const [ themeValue, setThemeValue ] = useState([]);
  const [ languageValue, setLanguageValue ] = useState([]);
  let filterArr = [];
  let filterStr = '';

  useEffect(() => {
    themeValue !== null && themeValue.map(item => filterArr.push(`theme=${item.value}`));
    languageValue !== null && languageValue.map(item => filterArr.push(`language=${item.value}`));
    filterStr = filterArr.join('&');
    filterCoursesData(filterStr);
  }, [themeValue, languageValue]);

  const selectedThemeValue = (value) => {
    setThemeValue(value);
  };

  const selectedLanguageValue = (value) => {
    setLanguageValue(value);
  };

  const themeOptions = themeList.map(item =>{ return { value: item.id, label: item.name, }});
  const languageOptions = languageList.map(item =>{ return { value: item.id, label: item.name, }});
  return (
    <React.Fragment>
      <div className="filter__title">Filter</div>
      <MultiSelect options={themeOptions} className={'params__selector'} onChange={selectedThemeValue} />
      <MultiSelect options={languageOptions} className={'params__selector'} onChange={selectedLanguageValue} />
    </React.Fragment>
  );
}

export default AllCoursesFilterSelect;
