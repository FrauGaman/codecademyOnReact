import React, { useEffect, useState } from 'react';
import MultiSelect from '../Multiselector';

function CareerFilterSelect({ themeList, languageList, knowledgeList, filterState }) {
  const [themeValue, setThemeValue] = useState([]);
  const [languageValue, setLanguageValue] = useState([]);
  const [knowledgeValue, setKnowledgeValue] = useState([]);
  const filterArr = [];
  let filterStr = '';

  useEffect(() => {
    (themeValue !== null) && themeValue.map(item => filterArr.push(`theme=${item.value}`));
    (languageValue !== null) && languageValue.map(item => filterArr.push(`language=${item.value}`));
    (knowledgeValue !== null) && knowledgeValue.map(item => filterArr.push(`knowledge=${item.value}`));
    filterStr = filterArr.join('&');
    filterState(filterStr);
  }, [themeValue, languageValue, knowledgeValue]);

  const selectedThemeValue = (value) => setThemeValue(value);
  const selectedLanguageValue = (value) => setLanguageValue(value);
  const selectedKnowledgeValue = (value) => setKnowledgeValue(value);
  const themeOptions = themeList.map(item =>{ return { value: item.id, label: item.name, }});
  const languageOptions = languageList.map(item => { return { value: item.id, label: item.name, }});
  const knowledgeOptions = knowledgeList.map(item => { return { value: item.id, label: item.name, }});

  return (
    <React.Fragment>
      <div className="filter__title">Filter</div>
      <div>Theme</div>
      <MultiSelect options={themeOptions} className={'params__selector'} onChange={selectedThemeValue} />
      <div>Language</div>
      <MultiSelect options={languageOptions} className={'params__selector'} onChange={selectedLanguageValue} />
      <div>Knowledge</div>
      <MultiSelect options={knowledgeOptions} className={'params__selector'} onChange={selectedKnowledgeValue} />
    </React.Fragment>
  );
}

export default CareerFilterSelect;
