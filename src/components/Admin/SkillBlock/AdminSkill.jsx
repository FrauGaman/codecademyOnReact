import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isPristine } from 'redux-form';
import getData from '../../../scripts/getData';
import { PATH } from '../../../scripts/const';
import {
  AddSkillData,
  RemoveSkillData,
  CreateSkillData,
  ChangeSkillData,
} from '../../../actions/actionSkillData';
import { AddThemeData } from '../../../actions/actionThemeData';
import { LANGUAGE_ADD_DATA } from '../../../actions/actionLanguageData';
import SkillTableTemplate from './SkillTableTemplate';
import AdminBtn from '../AdminButton/AdminButton';
import SkillFormModal from './SkillFormModal';
import { sortData } from '../../../scripts/changeData';

function AdminSkill({ skillStatus, themeList, languageList, getSkillsData, getThemeData, getLanguageData, createData, removeData, editData, pristine, sortSkillData }) {
  const [modalShow, setModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [initial, setInitial] = useState([]);

  useEffect(() => {
    getSkillsData();
    getThemeData();
    getLanguageData();
  }, []);

  const submitData = value => {
    value.id = +new Date();
    (value.theme !== undefined) && (value.theme = value.theme.map(item => +item));
    (value.language !== undefined) && (value.language = value.language.map(item => +item));
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
      editData(skillStatus, value);
      setEditModalShow(false);
    }
  };

  const showEditForm = (id) => {
    setInitial(skillStatus.find(item => item.id === id));
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
      {modalShow && <SkillFormModal
        title={'Create new element'}
        show={modalShow}
        onHide={() => setModalShow(false)}
        themeList={themeList}
        languageList={languageList}
        tabledata={skillStatus}
        submitData={submitData}
        createdata={createData}
      />}

      <SkillTableTemplate
        tableData={skillStatus}
        themeList={themeList}
        languageList={languageList}
        removeData={removeData}
        showModal={(id) => showEditForm(id)}
        sortSkillData={(sortType) => sortSkillData(sortType)}
      />
      {editModalShow && <SkillFormModal
        title={'Edit elements'}
        show={editModalShow}
        onHide={() => setEditModalShow(false)}
        themeList={themeList}
        languageList={languageList}
        tabledata={skillStatus}
        initialValues={initial}
        submitData={changeData}
      />}
    </React.Fragment>
  );
}

AdminSkill.propTypes = {
  skillStatus: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.img,
    title: PropTypes.string,
    descr: PropTypes.string,
    bgColor: PropTypes.string,
    period: PropTypes.string,
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
  getSkillsData: PropTypes.func,
  getThemeData: PropTypes.func,
  getLanguageData: PropTypes.func,
  createData: PropTypes.func,
  removeData: PropTypes.func,
  editData: PropTypes.func,
  pristine: PropTypes.bool,
  sortSkillData: PropTypes.func,
};

const mapStateToProps = state => ({
  skillStatus: state.skillTasks,
  themeList: state.themeTasks,
  languageList: state.languageTask,
  pristine: isPristine('changeSkill')(state),
});
const mapStateToDispatch = dispatch => ({
  getSkillsData: () => {
    getData(PATH.SKILLPATH, (res) => dispatch(AddSkillData(res)));
  },
  getThemeData: () => {
    getData(PATH.THEME, (res) => dispatch(AddThemeData(res)));
  },
  getLanguageData: () => {
    getData(PATH.LANGUAGE, (res) => dispatch(LANGUAGE_ADD_DATA(res)));
  },
  removeData: (id) => {
    dispatch(RemoveSkillData(id));
  },
  createData: (newData) => {
    dispatch(CreateSkillData(newData));
  },
  editData: (state, value) => {
    dispatch(ChangeSkillData(state, value));
  },
  sortSkillData: (sortType) => {
    sortData(PATH.SKILLPATH, (res) => dispatch(AddSkillData(res)), 'title', sortType);
  },
});

export default connect(mapStateToProps, mapStateToDispatch)(AdminSkill);
