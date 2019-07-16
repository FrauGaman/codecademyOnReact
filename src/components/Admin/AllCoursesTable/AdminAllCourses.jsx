import React, { useEffect, useState } from 'react';
import getData from '../../../scripts/getData';
import { PATH } from '../../../scripts/const';
import AllCoursesTableTemplate from './AllCoursesTableTemplate';

import '../tableStyle.sass';

function AdminAllCourses() {
  const [allCoursesStatus, setAllCoursesStatus] = useState([]);
  const addData = (res) => {
    setAllCoursesStatus(res);
  };

  useEffect(() => {
    getData(PATH.COURSESLIST, addData);
  }, []);

  return (
    <AllCoursesTableTemplate tableData={allCoursesStatus} />
  );
}

export default AdminAllCourses;
