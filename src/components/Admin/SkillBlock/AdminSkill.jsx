import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isPristine } from 'redux-form';
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
import { changeData, getData } from '../../../scripts/changeData';

function AdminSkill({ skillStatus, themeList, languageList, getThemeData, getLanguageData, createData, removeData, editData, pristine, findData }) {
  const [modalShow, setModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [initial, setInitial] = useState([]);
  const [sort, setSort] = useState('asc');
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [limitNumber, setLimitNumber] = useState('10');
  const [pageNumber, setPageNumber] = useState(1);
  const [pageArr, setPageArr] = useState([]);

  useEffect(() => {
    findData(sort, filter, search, pageNumber, limitNumber);
  }, [sort, filter, search, pageNumber, limitNumber]);

  useEffect(() => {
    getThemeData();
    getLanguageData();
  }, []);

  useEffect(() => {
    const helpArr = [];
    for (let i = 0; i < Math.ceil(skillStatus.count / limitNumber); i++) {
      helpArr.push(i);
    }
    setPageArr(helpArr);
  }, [skillStatus.count, pageNumber, limitNumber]);

  useEffect(() => {
    if (skillStatus.data !== undefined) {
      if (skillStatus.data.length === 0) {
        if (pageNumber >= 1) {
          let clonePageNumber = pageNumber;
          clonePageNumber = clonePageNumber - 1;
          setPageNumber(clonePageNumber);
        }
      }
    }
  }, [skillStatus.count]);

  const chooseSort = () => (sort === 'asc') ? setSort('desc') : setSort('asc');
  const searchState = (searchValue) => setSearch(searchValue);
  const filterState = (filterValue) => setFilter(filterValue);
  const selectLimitNumber = (event) => {
    setLimitNumber(event.target.value);
    setPageNumber(1);
  };

  const submitData = value => {
    (value.theme !== undefined) && (value.theme = value.theme.map(item => +item));
    (value.language !== undefined) && (value.language = value.language.map(item => +item));
    createData(value, sort, filter, search, pageNumber, limitNumber);
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
    setInitial(skillStatus.data.find(item => item.id === id));
    setEditModalShow(true);
  };

  const removeTableData = (id) => {
    removeData(id, sort, filter, search, pageNumber, limitNumber);
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
        removeTableData={removeTableData}
        showModal={(id) => showEditForm(id)}
        searchState={searchState}
        limitNumber={limitNumber}
        selectLimitNumber={selectLimitNumber}
        chooseSort={chooseSort}
        sort={sort}
        pageArr={pageArr}
        setPageNumber={setPageNumber}
        filterState={filterState}
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
  skillStatus: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      img: PropTypes.img,
      bgColor: PropTypes.string,
      title: PropTypes.string,
      descr: PropTypes.string,
      period: PropTypes.string,
      theme: PropTypes.array,
      language: PropTypes.array,
    })),
    count: PropTypes.string,
  }),
  themeList: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      descr: PropTypes.string,
      link: PropTypes.string,
    })),
    count: PropTypes.string,
  }),
  languageList: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      descr: PropTypes.string,
      link: PropTypes.string,
    })),
    count: PropTypes.string,
  }),
  getSkillsData: PropTypes.func,
  getThemeData: PropTypes.func,
  getLanguageData: PropTypes.func,
  createData: PropTypes.func,
  removeData: PropTypes.func,
  editData: PropTypes.func,
  pristine: PropTypes.bool,
  findData: PropTypes.func,
};

const mapStateToProps = state => ({
  skillStatus: state.skillTasks,
  themeList: state.themeTasks,
  languageList: state.languageTask,
  pristine: isPristine('changeSkill')(state),
});
const mapStateToDispatch = dispatch => ({
  getThemeData: () => {
    getData(PATH.THEME, (res) => dispatch(AddThemeData(res)));
  },
  getLanguageData: () => {
    getData(PATH.LANGUAGE, (res) => dispatch(LANGUAGE_ADD_DATA(res)));
  },
  removeData: (id, sortType, filterStr, name, pageNumber, limitNumber) => {
    dispatch(RemoveSkillData(id)).then(() => changeData(PATH.SKILLPATH, (res) => dispatch(AddSkillData(res)), 'title', sortType, filterStr, 'title', name, pageNumber, limitNumber));
  },
  createData: (newData, sortType, filterStr, name, pageNumber, limitNumber) => {
    dispatch(CreateSkillData(newData)).then(() => changeData(PATH.SKILLPATH, (res) => dispatch(AddSkillData(res)), 'title', sortType, filterStr, 'title', name, pageNumber, limitNumber));
  },
  editData: (state, value) => {
    dispatch(ChangeSkillData(state, value));
  },
  findData: (sortType, filterStr, name, pageNumber, limitNumber) => {
    changeData(PATH.SKILLPATH, (res) => dispatch(AddSkillData(res)), 'title', sortType, filterStr, 'title', name, pageNumber, limitNumber);
  },
});

export default connect(mapStateToProps, mapStateToDispatch)(AdminSkill);
