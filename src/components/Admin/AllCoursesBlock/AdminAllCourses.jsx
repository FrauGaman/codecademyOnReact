import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import getData from '../../../scripts/getData';
import { PATH } from '../../../scripts/const';
import AllCoursesTableTemplate from './AllCoursesTableTemplate';
import AdminBtn from '../AdminButton/AdminButton';
import AllCoursesFormModal from './AllCoursesFormModal';
import { AddCoursesData, RemoveCoursesData } from '../../../actions/actionCoursesData';

function AdminAllCourses({ allCoursesStatus, getCoursesData, removeData }) {
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    getCoursesData();
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
          tabledata={allCoursesStatus}
        />
      </ButtonToolbar>

      <AllCoursesTableTemplate tableData={allCoursesStatus} removeData={removeData} />
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  allCoursesStatus: state.coursesTasks,
});

const mapStateToDispatch = dispatch => ({
  getCoursesData: () => {
    getData(PATH.COURSESLIST, (res) => dispatch(AddCoursesData(res)));
  },
  removeData: (id) => {
    dispatch(RemoveCoursesData(id));
  }
});

export default connect(mapStateToProps, mapStateToDispatch)(AdminAllCourses);
