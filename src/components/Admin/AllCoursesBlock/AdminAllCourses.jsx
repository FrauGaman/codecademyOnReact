import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isPristine } from 'redux-form';
import getData from '../../../scripts/getData';
import { PATH } from '../../../scripts/const';
import {
  AddCoursesData,
  ChangeCoursesData,
  CreateCoursesData,
  RemoveCoursesData,
} from '../../../actions/actionCoursesData';
import { AddThemeData } from '../../../actions/actionThemeData';
import { AddLanguageData } from '../../../actions/actionLanguageData';
import AllCoursesTableTemplate from './AllCoursesTableTemplate';
import AdminBtn from '../AdminButton/AdminButton';
import AllCoursesFormModal from './AllCoursesFormModal';

function AdminAllCourses({ allCoursesStatus, themeList, languageList, getCoursesData, getThemeData, getLanguageData, createData, removeData, editData, pristine }) {
  const [modalShow, setModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [initial, setInitial] = useState([]);

  useEffect(() => {
    getCoursesData();
    getThemeData();
    getLanguageData();
  }, []);

  const submitData = value => {
    value.id = +new Date();
    value.theme = value.theme.map(item => +item);
    value.language = value.language.map(item => +item);
    const stateArr = [...[value]];
    createData(stateArr);
    setModalShow(false);
  };

  const changeData = value => {
    if (pristine) {
      const notChange = window.confirm('do you really want to leave without change?');
      if (notChange) {
        setEditModalShow(false);
      }
    } else {
      value.theme = value.theme.map(item => +item);
      value.language = value.language.map(item => +item);
      editData(allCoursesStatus, value);
      setEditModalShow(false);
    }
  };

  const showEditForm = (id) => {
    setInitial(allCoursesStatus.find(item => item.id === id));
    setEditModalShow(true);
  };

  return (
    <React.Fragment>
      <AdminBtn
        className={'create__btn'}
        innerBtn={'Create'}
        position={{ span: 2, offset: 10 }}
        variant="primary"
        onClick={() => setModalShow(true)}
      />
      {modalShow && <AllCoursesFormModal
        title={'Create new element'}
        show={modalShow}
        onHide={() => setModalShow(false)}
        themeList={themeList}
        languageList={languageList}
        tabledata={allCoursesStatus}
        submitData={submitData}
        createdata={createData}
      />}

      <AllCoursesTableTemplate
        tableData={allCoursesStatus}
        themeList={themeList}
        languageList={languageList}
        removeData={removeData}
        showModal={(id) => showEditForm(id)}
      />
      {editModalShow && <AllCoursesFormModal
        title={'Edit elements'}
        show={editModalShow}
        onHide={() => setEditModalShow(false)}
        themeList={themeList}
        languageList={languageList}
        tabledata={allCoursesStatus}
        initialValues={initial}
        submitData={changeData}
      />}
    </React.Fragment>
  );
}

AdminAllCourses.propTypes = {
  allCoursesStatus: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    importance: PropTypes.string,
    title: PropTypes.string,
    descr: PropTypes.string,
    icon: PropTypes.string,
    borderColor: PropTypes.string,
    theme: PropTypes.array,
    language: PropTypes.array,
  })),
  themeList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    descr: PropTypes.string,
    link: PropTypes.string,
  })),
  languageList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    descr: PropTypes.string,
    link: PropTypes.string,
  })),
  getCoursesData: PropTypes.func,
  getThemeData: PropTypes.func,
  getLanguageData: PropTypes.func,
  createData: PropTypes.func,
  removeData: PropTypes.func,
  editData: PropTypes.func,
  pristine: PropTypes.bool,
};

const mapStateToProps = state => ({
  allCoursesStatus: state.coursesTasks,
  themeList: state.themeTasks,
  languageList: state.languageTask,
  pristine: isPristine('changeAllCourses')(state),
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
  editData: (state, value) => {
    dispatch(ChangeCoursesData(state, value));
  },
});

export default connect(mapStateToProps, mapStateToDispatch)(AdminAllCourses);
