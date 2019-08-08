import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isPristine } from 'redux-form';
import { PATH } from '../../../scripts/const';
import {
  AddCareerData,
  ChangeCareerData,
  CreateCareerData,
  RemoveCareerData,
} from '../../../actions/careerData';
import { AddThemeData } from '../../../actions/themeData';
import { AddLanguageData } from '../../../actions/languageData';
import { AddKnowledgeData } from '../../../actions/knowledgeData';
import CareerTableTemplate from './CareerTableTemplate';
import AdminBtn from '../AdminButton/AdminButton';
import { changeData } from '../../../scripts/changeData';
import ModalWindow from '../../ModalWindow';
import CareerModalInner from './CareerModalInner';
import PreloaderMini from '../../Preloader/PreloaderMini';

function AdminCareer({ careerStatus, themeList, languageList, knowledgeList, getThemeData, getLanguageData, getKnowledgeData, createData, removeData, editData, pristine, findData }) {
  const [modalShow, setModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [initial, setInitial] = useState([]);
  const [sort, setSort] = useState('asc');
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [limitNumber, setLimitNumber] = useState('10');
  const [pageNumber, setPageNumber] = useState(1);
  const [pageArr, setPageArr] = useState([]);
  const [getDataStatus, setGetDataStatus] = useState(true);
  const [errorBlock, setErrorBlock] = useState(false);

  useEffect(() => {
    findData(sort, filter, search, pageNumber, limitNumber, setGetDataStatus, setErrorBlock);
  }, [sort, filter, search, pageNumber, limitNumber]);

  useEffect(() => {
    getThemeData(themeList.count);
    getLanguageData(languageList.count);
    getKnowledgeData(knowledgeList.count);
  }, [themeList.count, languageList.count, knowledgeList.count]);

  useEffect(() => {
    const helpArr = [];
    for (let i = 0; i < Math.ceil(careerStatus.count / limitNumber); i++) {
      helpArr.push(i);
    }
    setPageArr(helpArr);
  }, [careerStatus.count, limitNumber]);

  useEffect(() => {
    if (careerStatus.data !== undefined && careerStatus.data.length === 0) {
      if (pageNumber > 1) {
        setPageNumber(pageNumber - 1);
      }
    }
  }, [careerStatus.count]);

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
    (value.knowledge !== undefined) && (value.knowledge = value.knowledge.map(item => +item));
    createData(value, sort, filter, search, pageNumber, limitNumber, setGetDataStatus);
    setModalShow(false);
  };

  const editFormData = value => {
    if (pristine) {
      const notChange = window.confirm('do you really want to leave without change?');
      if (notChange) {
        setEditModalShow(false);
      }
    } else {
      value.theme = value.theme.map(item => +item);
      value.language = value.language.map(item => +item);
      value.knowledge = value.knowledge.map(item => +item);
      editData(initial.id, careerStatus, value, sort, filter, search, pageNumber, limitNumber, setGetDataStatus);
      setEditModalShow(false);
    }
  };

  const showEditForm = (id) => {
    setInitial(careerStatus.data.find(item => item.id === id));
    setEditModalShow(true);
  };

  const removeTableData = (id) => {
    removeData(id, sort, filter, search, pageNumber, limitNumber, setGetDataStatus);
  };

  return (
    <div>
      {
        !getDataStatus && <PreloaderMini />
      }
      <div>
        <AdminBtn
          className={'create__btn'}
          innerBtn={'Create'}
          variant="primary"
          onClick={() => setModalShow(true)}
        />
        <ModalWindow title={'Create new element'} show={modalShow} onHide={() => setModalShow(false)}>
          <CareerModalInner
            themeList={themeList}
            languageList={languageList}
            knowledgeList={knowledgeList}
            onHide={() => setModalShow(false)}
            submitData={submitData}
          />
        </ModalWindow>

        <CareerTableTemplate
          removeTableData={removeTableData}
          themeList={themeList}
          languageList={languageList}
          knowledgeList={knowledgeList}
          tableData={careerStatus}
          showModal={(id) => showEditForm(id)}
          searchState={searchState}
          limitNumber={limitNumber}
          selectLimitNumber={selectLimitNumber}
          chooseSort={chooseSort}
          sort={sort}
          pageArr={pageArr}
          setPageNumber={setPageNumber}
          pageNumber={pageNumber}
          filterState={filterState}
          errorBlock={errorBlock}
        />
        <ModalWindow title={'Edit elements'} show={editModalShow} onHide={() => setEditModalShow(false)}>
          <CareerModalInner
            themeList={themeList}
            languageList={languageList}
            knowledgeList={knowledgeList}
            onHide={() => setEditModalShow(false)}
            initialValues={initial}
            submitData={editFormData}
          />
        </ModalWindow>
      </div>
    </div>
  );
}

AdminCareer.propTypes = {
  careerStatus: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      img: PropTypes.img,
      bgColor: PropTypes.string,
      title: PropTypes.string,
      descr: PropTypes.string,
      theme: PropTypes.array,
      language: PropTypes.array,
      knowledge: PropTypes.array,
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
  knowledgeList: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })),
    count: PropTypes.string,
  }),
  getCareerData: PropTypes.func,
  getThemeData: PropTypes.func,
  getLanguageData: PropTypes.func,
  getKnowledgeData: PropTypes.func,
  createData: PropTypes.func,
  removeData: PropTypes.func,
  editData: PropTypes.func,
  pristine: PropTypes.bool,
  findData: PropTypes.func,
};

const mapStateToProps = state => ({
  careerStatus: state.careerTasks,
  themeList: state.themeTasks,
  languageList: state.languageTask,
  knowledgeList: state.knowledgeTask,
  pristine: isPristine('changeCareer')(state),
});

const mapStateToDispatch = dispatch => ({
  getThemeData: (count) => {
    const options = {
      path: PATH.THEME,
      addData: (res) => dispatch(AddThemeData(res)),
      limitNumber: count,
    };
    changeData(options);
  },
  getLanguageData: (count) => {
    const options = {
      path: PATH.LANGUAGE,
      addData: (res) => dispatch(AddLanguageData(res)),
      limitNumber: count,
    };
    changeData(options);
  },
  getKnowledgeData: (count) => {
    const options = {
      path: PATH.KNOWLEDGE,
      addData: (res) => dispatch(AddKnowledgeData(res)),
      limitNumber: count,
    };
    changeData(options);
  },
  removeData: (id, sortType, filterStr, name, pageNumber, limitNumber, setGetDataStatus) => {
    const options = {
      path: PATH.CAREERPATH,
      addData: (res) => dispatch(AddCareerData(res)),
      sortField: 'title',
      sortType,
      filterStr,
      field: 'title',
      name,
      pageNumber,
      limitNumber,
      setGetDataStatus,
    };
    dispatch(RemoveCareerData(id, setGetDataStatus)).then(() => changeData(options));
  },
  createData: (newData, sortType, filterStr, name, pageNumber, limitNumber, setGetDataStatus) => {
    const options = {
      path: PATH.CAREERPATH,
      addData: (res) => dispatch(AddCareerData(res)),
      sortField: 'title',
      sortType,
      filterStr,
      field: 'title',
      name,
      pageNumber,
      limitNumber,
      setGetDataStatus,
    };
    dispatch(CreateCareerData(newData, setGetDataStatus)).then(() => changeData(options));
  },
  editData: (id, state, value, sortType, filterStr, name, pageNumber, limitNumber, setGetDataStatus) => {
    const options = {
      path: PATH.CAREERPATH,
      addData: (res) => dispatch(AddCareerData(res)),
      sortField: 'title',
      sortType,
      filterStr,
      field: 'title',
      name,
      pageNumber,
      limitNumber,
      setGetDataStatus,
    };
    dispatch(ChangeCareerData(id, state, value, setGetDataStatus)).then(() => changeData(options));
  },
  findData: (sortType, filterStr, name, pageNumber, limitNumber, setGetDataStatus, setErrorBlock) => {
    const options = {
      path: PATH.CAREERPATH,
      addData: (res) => dispatch(AddCareerData(res)),
      sortField: 'title',
      sortType,
      filterStr,
      field: 'title',
      name,
      pageNumber,
      limitNumber,
      setGetDataStatus,
      setErrorBlock,
    };
    changeData(options);
  },
});

export default connect(mapStateToProps, mapStateToDispatch)(AdminCareer);
