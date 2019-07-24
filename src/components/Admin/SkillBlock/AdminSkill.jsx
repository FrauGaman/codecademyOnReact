import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

import getData from '../../../scripts/getData';
import { PATH } from '../../../scripts/const';

import { AddSkillData, RemoveSkillData, CreateSkillData } from '../../../actions/actionSkillData';
import SkillTableTemplate from './SkillTableTemplate';
import AdminBtn from '../AdminButton/AdminButton';
import SkillFormModal from './SkillFormModal';
import { AddThemeData } from '../../../actions/actionThemeData';
import { AddLanguageData } from '../../../actions/actionLanguageData';

function AdminSkill({ skillStatus, themeList, languageList, getSkillsData, getThemeData, getLanguageData, createData, removeData }) {
  const [modalShow, setModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);

  useEffect(() => {
    getSkillsData();
    getThemeData();
    getLanguageData();
  }, []);

  const submitData = value => {
    value.id = +new Date();
    value.theme = value.theme.map( item => +item);
    value.language = value.language.map( item => +item);
    const stateArr = [...[value]];
    createData(stateArr);
    setModalShow(false);
  };

  const changeData = value => {
    value.id = +new Date();
    console.log(value);
    setEditModalShow(false);
  };

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
        <SkillFormModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          themeList={themeList}
          languageList={languageList}
          tabledata={skillStatus}
          submitData={submitData}
          createdata={createData}
        />
      </ButtonToolbar>

      <SkillTableTemplate
        tableData={skillStatus}
        themeList={themeList}
        languageList={languageList}
        removeData={removeData}
        showModal={() => setEditModalShow(true)}
      />
      <SkillFormModal
        show={editModalShow}
        onHide={() => setEditModalShow(false)}
        themeList={themeList}
        languageList={languageList}
        tabledata={skillStatus}
        submitData={changeData}
      />
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  skillStatus: state.skillTasks,
  themeList: state.themeTasks,
  languageList: state.languageTask,
});
const mapStateToDispatch = dispatch => ({
  getSkillsData: () => {
    getData(PATH.SKILLPATH, (res) => dispatch(AddSkillData(res)));
  },
  getThemeData: () => {
    getData(PATH.THEME, (res) => dispatch(AddThemeData(res)));
  },
  getLanguageData: () => {
    getData(PATH.LANGUAGE, (res) => dispatch(AddLanguageData(res)));
  },
  removeData: (id) => {
    dispatch(RemoveSkillData(id));
  },
  createData: (newData) => {
    dispatch(CreateSkillData(newData));
  },
});

export default connect(mapStateToProps, mapStateToDispatch)(AdminSkill);
