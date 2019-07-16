import React, { useEffect, useState } from 'react';
import getData from '../../../scripts/getData';
import { PATH } from '../../../scripts/const';
import SkillTableTemplate from './SkillTableTemplate';

function AdminSkill() {
  const [skillStatus, setSkillStatus] = useState([]);
  const addData = (res) => {
    setSkillStatus(res);
  };

  useEffect(() => {
    getData(PATH.SKILLPATH, addData);
  }, []);

  return(
    <SkillTableTemplate tableData={skillStatus} />
  )
}

export default AdminSkill