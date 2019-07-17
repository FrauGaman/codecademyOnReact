import React, { useEffect, useState } from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import getData from '../../../scripts/getData';
import { PATH } from '../../../scripts/const';
import AllCoursesTableTemplate from './AllCoursesTableTemplate';
import AdminBtn from '../AdminButton/AdminButton';
import AllCoursesFormModal from '../CreateForms/AllCoursesFormModal';

function AdminAllCourses() {
  const [modalShow, setModalShow] = useState(false);
  const [allCoursesStatus, setAllCoursesStatus] = useState([]);
  const addData = (res) => {
    setAllCoursesStatus(res);
  };

  useEffect(() => {
    getData(PATH.COURSESLIST, addData);
  }, []);

  return (
    <React.Fragment>
      <ButtonToolbar>
        <AdminBtn
          className={'create__btn'}
          innerBtn={'Create'}
          position={{ span: 2, offset: 10 }}
          variant="primary"
          onClick={() => setModalShow(true)}
        />
        <AllCoursesFormModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          tableData={allCoursesStatus}
        />
      </ButtonToolbar>

      <AllCoursesTableTemplate tableData={allCoursesStatus} />
    </React.Fragment>
  );
}

export default AdminAllCourses;
