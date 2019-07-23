import React, { useEffect, useState } from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { connect } from 'react-redux';
import { AddCareerData, CreateCareerData, RemoveCareerData } from '../../../actions/actionCareerData';

import getData from '../../../scripts/getData';
import { PATH } from '../../../scripts/const';
import CareerTableTemplate from './CareerTableTemplate';
import AdminBtn from '../AdminButton/AdminButton';
import CareerFormModalCreate from './CareerFormModalCreate';
import { AddThemeData } from '../../../actions/actionThemeData';
import { AddLanguageData } from '../../../actions/actionLanguageData';
import { AddKnowledgeData } from '../../../actions/actionKnowledgeData';

function AdminCareer({ careerStatus, themeList, languageList, knowledgeList, getCareerData, getThemeData, getLanguageData, getKnowledgeData, createData, removeData }) {
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    getCareerData();
    getThemeData();
    getLanguageData();
    getKnowledgeData();
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
        <CareerFormModalCreate
          show={modalShow}
          onHide={() => setModalShow(false)}
          themeList={themeList}
          languageList={languageList}
          knowledgeList={knowledgeList}
          tabledata={careerStatus}
          createdata={createData}
        />
      </ButtonToolbar>

      <CareerTableTemplate
        removeData={removeData}
        themeList={themeList}
        languageList={languageList}
        knowledgeList={knowledgeList}
        tableData={careerStatus}
      />
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  careerStatus: state.careerTasks,
  themeList: state.themeTasks,
  languageList: state.languageTask,
  knowledgeList: state.knowledgeTask,
});

const mapStateToDispatch = dispatch => ({
  getCareerData: () => {
    getData(PATH.CAREERPATH, (res) => dispatch(AddCareerData(res)));
  },
  getThemeData: () => {
    getData(PATH.THEME, (res) => dispatch(AddThemeData(res)));
  },
  getLanguageData: () => {
    getData(PATH.LANGUAGE, (res) => dispatch(AddLanguageData(res)));
  },
  getKnowledgeData: () => {
    getData(PATH.KNOWLEDGE, (res) => dispatch(AddKnowledgeData(res)));
  },
  removeData: (id) => {
    dispatch(RemoveCareerData(id));
  },
  createData: (newData) => {
    dispatch(CreateCareerData(newData));
  },
});

export default connect(mapStateToProps, mapStateToDispatch)(AdminCareer);
