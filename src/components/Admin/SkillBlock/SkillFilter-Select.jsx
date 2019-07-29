import React from 'react';
import MultiSelect from '../Multiselector';

function SkillFilterSelect({ themeList, languageList }) {
  const themeOptions = themeList.map(item =>{ return { value: item.id, label: item.name, }});
  const languageOptions = languageList.map(item =>{ return { value: item.id, label: item.name, }});
  return (
    <React.Fragment>
      <MultiSelect options={themeOptions} className={'params__selector'} />
      <MultiSelect options={languageOptions} className={'params__selector'} />
    </React.Fragment>



  );
}

export default SkillFilterSelect;
