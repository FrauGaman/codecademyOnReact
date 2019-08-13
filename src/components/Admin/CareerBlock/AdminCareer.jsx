import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isPristine } from 'redux-form';
import { setLoading, setDataStatusEmpty } from '../../../actions/dataStatus';
import CareerTableTemplate from './CareerTableTemplate';
import AdminBtn from '../AdminButton/AdminButton';
import ModalWindow from '../../ModalWindow';
import CareerModalInner from './CareerModalInner';
import PreloaderMini from '../../Preloader/PreloaderMini';
import { getThemeData, getLanguageData, getKnowledgeData, removeData, createData, editData, findData } from './dispatchCareer';

function AdminCareer({ careerStatus, themeList, languageList, knowledgeList, getThemeData, getLanguageData, getKnowledgeData, createData, removeData, editData, pristine, findData, dataStatus, statusLoading, statusEmptyData }) {
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
    findData(sort, filter, search, pageNumber, limitNumber, statusEmptyData, statusLoading);
  }, [sort, filter, search, pageNumber, limitNumber]);

  useEffect(() => {
    getThemeData(themeList.count, statusEmptyData, statusLoading);
    getLanguageData(languageList.count, statusEmptyData, statusLoading);
    getKnowledgeData(knowledgeList.count, statusEmptyData, statusLoading);
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
    const valueData = {
      ...value,
      theme: value.theme && value.theme.map(item => +item.value),
      language: value.language && value.language.map(item => +item.value),
      knowledge: value.knowledge && value.knowledge.map(item => +item.value),
    };
    createData(valueData, sort, filter, search, pageNumber, limitNumber, statusEmptyData, statusLoading);
    setModalShow(false);
  };

  const editFormData = value => {
    if (pristine) {
      const notChange = window.confirm('do you really want to leave without change?');
      if (notChange) {
        setEditModalShow(false);
      }
    } else {
      const valueData = {
        ...value,
        theme: (value.theme && (value.theme !== []) && value.theme.map(item => item !== null)) && value.theme.map(item => +item.value),
        language: (value.language && (value.language !== []) && value.language !== null) && value.language.map(item => +item.value),
        knowledge: (value.knowledge && (value.knowledge !== []) && value.knowledge.map(item => item !== null)) && value.knowledge.map(item => +item.value),
      };
      editData(initial.id, careerStatus, valueData, sort, filter, search, pageNumber, limitNumber, statusEmptyData, statusLoading);
      setEditModalShow(false);
    }
  };

  const showEditForm = (id) => {
    const themeOptions = themeList.data && themeList.data.map(item => { return { value: item.id, label: item.name}});
    const languageOptions = languageList.data && languageList.data.map(item => { return { value: item.id, label: item.name}});
    const knowledgeOptions = knowledgeList.data && knowledgeList.data.map(item => { return { value: item.id, label: item.name, }});
    let careerData = JSON.stringify(careerStatus.data);
    careerData = JSON.parse(careerData);
    let arrTheme = [];
    let arrLang = [];
    let arrKnow = [];
    careerData.map(item => {
      if (item.id === id) {
        themeOptions.map(elem => {
          item.theme && item.theme.map(inst => {
            if(elem.value === inst) {
              arrTheme.push(elem);
            }
          });
        });
      }
      item.theme = arrTheme;
    });
    careerData.map(item => {
      if (item.id === id) {
        languageOptions.map(elem => {
          item.language && item.language.map(inst => {
            if(elem.value === inst) {
              arrLang.push(elem);
            }
          });
        });
      }
      item.language = arrLang;
    });
    careerData.map(item => {
      if (item.id === id) {
        knowledgeOptions.map(elem => {
          item.knowledge && item.knowledge.map(inst => {
            if (elem.value === inst) {
              arrKnow.push(elem);
            }
          });
        });
      }
      item.knowledge = arrKnow;
    });
    setInitial(careerData.find(item => item.id === id));
    setEditModalShow(true);
  };

  const removeTableData = (id) => {
    removeData(id, sort, filter, search, pageNumber, limitNumber, statusEmptyData, statusLoading);
  };

  return (
    <div>
      {
        !dataStatus.loading && <PreloaderMini />
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
          dataStatus={dataStatus}
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
  getThemeData: PropTypes.func,
  getLanguageData: PropTypes.func,
  getKnowledgeData: PropTypes.func,
  createData: PropTypes.func,
  removeData: PropTypes.func,
  editData: PropTypes.func,
  pristine: PropTypes.bool,
  findData: PropTypes.func,
  dataStatus: PropTypes.shape({
    loading: PropTypes.bool,
    emptyData: PropTypes.bool,
  }),
  statusLoading: PropTypes.func,
  statusEmptyData: PropTypes.func,
};

const mapStateToProps = state => ({
  careerStatus: state.careerTasks,
  themeList: state.themeTasks,
  languageList: state.languageTask,
  knowledgeList: state.knowledgeTask,
  dataStatus: state.dataStatusTasks,
  pristine: isPristine('changeCareer')(state),
});

const mapStateToDispatch = dispatch => ({
  getThemeData: (count, statusEmptyData, statusLoading) => {
    getThemeData(count, statusEmptyData, statusLoading, dispatch);
  },
  getLanguageData: (count, statusEmptyData, statusLoading) => {
    getLanguageData(count, statusEmptyData, statusLoading, dispatch);
  },
  getKnowledgeData: (count, statusEmptyData, statusLoading) => {
    getKnowledgeData(count, statusEmptyData, statusLoading, dispatch);
  },
  removeData: (id, sortType, filterStr, name, pageNumber, limitNumber, statusEmptyData, statusLoading) => {
    removeData(id, sortType, filterStr, name, pageNumber, limitNumber, statusEmptyData, statusLoading, dispatch);
  },
  createData: (newData, sortType, filterStr, name, pageNumber, limitNumber, statusEmptyData, statusLoading) => {
    createData(newData, sortType, filterStr, name, pageNumber, limitNumber, statusEmptyData, statusLoading, dispatch);
  },
  editData: (id, state, value, sortType, filterStr, name, pageNumber, limitNumber, statusEmptyData, statusLoading) => {
    editData(id, state, value, sortType, filterStr, name, pageNumber, limitNumber, statusEmptyData, statusLoading, dispatch);
  },
  findData: (sortType, filterStr, name, pageNumber, limitNumber, statusEmptyData, statusLoading) => {
    findData(sortType, filterStr, name, pageNumber, limitNumber, statusEmptyData, statusLoading, dispatch);
  },
  statusLoading: (loading) => {
    dispatch(setLoading(loading));
  },
  statusEmptyData: (emptyData) => {
    dispatch(setDataStatusEmpty(emptyData));
  },
});

export default connect(mapStateToProps, mapStateToDispatch)(AdminCareer);
