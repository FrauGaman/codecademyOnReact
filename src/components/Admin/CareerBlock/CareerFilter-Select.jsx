import React from 'react';
import MultiSelect from '../Multiselector';

function CareerFilterSelect({ themeList, languageList, knowledgeList }) {
  const themeOptions = themeList.map(item =>{ return { value: item.id, label: item.name, }});
  const languageOptions = languageList.map(item =>{ return { value: item.id, label: item.name, }});
  const knowledgeOptions = knowledgeList.map(item =>{ return { value: item.id, label: item.name, }});
  return (
    <tr>
      <td></td><td></td><td></td><td></td>
      <td>
        <MultiSelect options={themeOptions} />
      </td>
      <td>
        <MultiSelect options={languageOptions} />
      </td>
      <td>
        <MultiSelect options={knowledgeOptions} />
      </td>
      <td></td>
    </tr>
  );
}

export default CareerFilterSelect;
