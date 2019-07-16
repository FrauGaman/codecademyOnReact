import React, { useEffect, useState } from 'react';
import getData from '../../../scripts/getData';
import { PATH } from '../../../scripts/const';
import CareerTableTemplate from './CareerTableTemplate';

import '../tableStyle.sass';

function AdminCareer() {
  const [careerStatus, setCareerStatus] = useState([]);
  const addData = (res) => {
    setCareerStatus(res);
  };

  useEffect(() => {
    getData(PATH.CAREERPATH, addData);
  }, []);

  return (
    <CareerTableTemplate tableData={careerStatus} />
  )
}

export default AdminCareer;
