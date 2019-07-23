import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import getData from '../../../scripts/getData';
import { PATH } from '../../../scripts/const';
import AllCoursesTableTemplate from './AllCoursesTableTemplate';
import AdminBtn from '../AdminButton/AdminButton';
import AllCoursesFormModalCreate from './AllCoursesFormModalCreate';
import { AddCoursesData, CreateCoursesData, RemoveCoursesData } from '../../../actions/actionCoursesData';
import { AddThemeData } from '../../../actions/actionThemeData';
import { AddLanguageData } from '../../../actions/actionLanguageData';

function AdminAllCourses({ allCoursesStatus, themeList, languageList, getCoursesData, getThemeData, getLanguageData, createData, removeData }) {
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    getCoursesData();
    getThemeData();
    getLanguageData();
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
        <AllCoursesFormModalCreate
          show={modalShow}
          onHide={() => setModalShow(false)}
          themeList={themeList}
          languageList={languageList}
          tabledata={allCoursesStatus}
          createdata={createData}
        />
      </ButtonToolbar>

      <AllCoursesTableTemplate
        tableData={allCoursesStatus}
        themeList={themeList}
        languageList={languageList}
        removeData={removeData}
      />
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  allCoursesStatus: state.coursesTasks,
  themeList: state.themeTasks,
  languageList: state.languageTask,
});

const mapStateToDispatch = dispatch => ({
  getCoursesData: () => {
    getData(PATH.COURSESLIST, (res) => dispatch(AddCoursesData(res)));
  },
  getThemeData: () => {
    getData(PATH.THEME, (res) => dispatch(AddThemeData(res)));
  },
  getLanguageData: () => {
    getData(PATH.LANGUAGE, (res) => dispatch(AddLanguageData(res)));
  },
  removeData: (id) => {
    dispatch(RemoveCoursesData(id));
  },
  createData: (newData) => {
    dispatch(CreateCoursesData(newData));
  },
});

export default connect(mapStateToProps, mapStateToDispatch)(AdminAllCourses);
