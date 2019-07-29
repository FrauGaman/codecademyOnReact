import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isPristine } from 'redux-form';
import getData from '../../../scripts/getData';
import { PATH } from '../../../scripts/const';
import {
  AddCareerData,
  ChangeCareerData,
  CreateCareerData,
  RemoveCareerData,
} from '../../../actions/actionCareerData';
import { AddThemeData } from '../../../actions/actionThemeData';
import { LANGUAGE_ADD_DATA } from '../../../actions/actionLanguageData';
import { KNOWLEDGE_ADD_DATA } from '../../../actions/actionKnowledgeData';
import CareerTableTemplate from './CareerTableTemplate';
import AdminBtn from '../AdminButton/AdminButton';
import CareerFormModal from './CareerFormModal';
import { sortData } from '../../../scripts/changeData';

function AdminCareer({ careerStatus, themeList, languageList, knowledgeList, getCareerData, getThemeData, getLanguageData, getKnowledgeData, createData, removeData, editData, pristine, sortCareerData }) {
  const [modalShow, setModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [initial, setInitial] = useState([]);

  useEffect(() => {
    getCareerData();
    getThemeData();
    getLanguageData();
    getKnowledgeData();
  }, []);

  const submitData = value => {
    value.id = +new Date();
    (value.theme !== undefined) && (value.theme = value.theme.map(item => +item));
    (value.language !== undefined) && (value.language = value.language.map(item => +item));
    (value.knowledge !== undefined) && (value.knowledge = value.knowledge.map(item => +item));
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
      value.knowledge = value.knowledge.map(item => +item);
      editData(careerStatus, value);
      setEditModalShow(false);
    }
  };

  const showEditForm = (id) => {
    setInitial(careerStatus.find(item => item.id === id));
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
      {modalShow && <CareerFormModal
        title={'Create new element'}
        show={modalShow}
        onHide={() => setModalShow(false)}
        themeList={themeList}
        languageList={languageList}
        knowledgeList={knowledgeList}
        tabledata={careerStatus}
        submitData={submitData}
        createdata={createData}
      />}

      <CareerTableTemplate
        removeData={removeData}
        themeList={themeList}
        languageList={languageList}
        knowledgeList={knowledgeList}
        tableData={careerStatus}
        showModal={(id) => showEditForm(id)}
        sortCareerData={(sortType) => sortCareerData(sortType)}
      />
      {editModalShow && <CareerFormModal
        title={'Edit elements'}
        show={editModalShow}
        onHide={() => setEditModalShow(false)}
        themeList={themeList}
        languageList={languageList}
        knowledgeList={knowledgeList}
        tabledata={careerStatus}
        initialValues={initial}
        submitData={changeData}
      />}
    </React.Fragment>
  );
}

AdminCareer.propTypes = {
  careerStatus: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.img,
    title: PropTypes.string,
    bgColor: PropTypes.string,
    descr: PropTypes.string,
    theme: PropTypes.array,
    language: PropTypes.array,
    knowledge: PropTypes.array,
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
  knowledgeList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })),
  getCareerData: PropTypes.func,
  getThemeData: PropTypes.func,
  getLanguageData: PropTypes.func,
  getKnowledgeData: PropTypes.func,
  createData: PropTypes.func,
  removeData: PropTypes.func,
  editData: PropTypes.func,
  pristine: PropTypes.bool,
  sortCareerData: PropTypes.func,
};

const mapStateToProps = state => ({
  careerStatus: state.careerTasks,
  themeList: state.themeTasks,
  languageList: state.languageTask,
  knowledgeList: state.knowledgeTask,
  pristine: isPristine('changeCareer')(state),
});

const mapStateToDispatch = dispatch => ({
  getCareerData: () => {
    getData(PATH.CAREERPATH, (res) => dispatch(AddCareerData(res)));
  },
  getThemeData: () => {
    getData(PATH.THEME, (res) => dispatch(AddThemeData(res)));
  },
  getLanguageData: () => {
    getData(PATH.LANGUAGE, (res) => dispatch(LANGUAGE_ADD_DATA(res)));
  },
  getKnowledgeData: () => {
    getData(PATH.KNOWLEDGE, (res) => dispatch(KNOWLEDGE_ADD_DATA(res)));
  },
  removeData: (id) => {
    dispatch(RemoveCareerData(id));
  },
  createData: (newData) => {
    dispatch(CreateCareerData(newData));
  },
  editData: (state, value) => {
    dispatch(ChangeCareerData(state, value));
  },
  sortCareerData: (sortType) => {
    sortData(PATH.CAREERPATH, (res) => dispatch(AddCareerData(res)), 'title', sortType);
  },
});

export default connect(mapStateToProps, mapStateToDispatch)(AdminCareer);
