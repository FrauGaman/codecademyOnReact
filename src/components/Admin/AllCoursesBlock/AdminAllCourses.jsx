import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isPristine } from 'redux-form';
import { setLoading, setDataStatusEmpty } from '../../../actions/dataStatus';
import AllCoursesTableTemplate from './AllCoursesTableTemplate';
import AdminBtn from '../AdminButton/AdminButton';
import ModalWindow from '../../ModalWindow';
import AllCoursesModalInner from './AllCoursesModalInner';
import PreloaderMini from '../../Preloader/PreloaderMini';
import { getThemeData, getLanguageData, removeData, createData, editData, findData } from './dispatchCourses';

function AdminAllCourses({ allCoursesStatus, themeList, languageList, getThemeData, getLanguageData, createData, removeData, editData, pristine, findData, dataStatus, statusLoading, statusEmptyData }) {
  const [modalShow, setModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [initial, setInitial] = useState([]);
  const [sort, setSort] = useState('asc');
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [limitNumber, setLimitNumber] = useState('10');
  const [pageNumber, setPageNumber] = useState(1);
  const [pageArr, setPageArr] = useState([]);

  console.log(dataStatus.loading)

  useEffect(() => {
    findData(sort, filter, search, pageNumber, limitNumber, statusEmptyData, statusLoading);
  }, [sort, filter, search, pageNumber, limitNumber]);

  useEffect(() => {
    getThemeData(themeList.count, statusEmptyData, statusLoading);
    getLanguageData(languageList.count, statusEmptyData, statusLoading);
  }, [themeList.count, languageList.count]);

  useEffect(() => {
    const helpArr = [];
    for (let i = 0; i < Math.ceil(allCoursesStatus.count / limitNumber); i++) {
      helpArr.push(i);
    }
    setPageArr(helpArr);
  }, [allCoursesStatus.count, limitNumber]);

  useEffect(() => {
    if (allCoursesStatus.data !== undefined && allCoursesStatus.data.length === 0) {
      if (pageNumber > 1) {
        setPageNumber(pageNumber - 1);
      }
    }
  }, [allCoursesStatus.count]);

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
        language: (value.language && (value.language !== []) && value.language.map(item => item !== null)) && value.language.map(item => +item.value),
      };
      editData(initial.id, allCoursesStatus, valueData, sort, filter, search, pageNumber, limitNumber, statusEmptyData, statusLoading);
      setEditModalShow(false);
    }
  };

  const showEditForm = (id) => {
    const themeOptions = themeList.data && themeList.data.map(item => { return { value: item.id, label: item.name}});
    const languageOptions = languageList.data && languageList.data.map(item => { return { value: item.id, label: item.name}});
    let allCoursesData = JSON.stringify(allCoursesStatus.data);
    allCoursesData = JSON.parse(allCoursesData);
    let arrTheme = [];
    let arrLang = [];

    allCoursesData.map(item => {
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
    allCoursesData.map(item => {
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
    setInitial(allCoursesData.find(item => item.id === id));
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
          <AllCoursesModalInner themeList={themeList} languageList={languageList} onHide={() => setModalShow(false)} submitData={submitData} />
        </ModalWindow>
        <AllCoursesTableTemplate
          tableData={allCoursesStatus}
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
          pageNumber={pageNumber}
          dataStatus={dataStatus}
        />
        <ModalWindow title={'Edit elements'} show={editModalShow} onHide={() => setEditModalShow(false)}>
          <AllCoursesModalInner themeList={themeList} languageList={languageList} onHide={() => setEditModalShow(false)} initialValues={initial} submitData={editFormData} />
        </ModalWindow>
      </div>
    </div>
  );
}

AdminAllCourses.propTypes = {
  allCoursesStatus: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      importance: PropTypes.string,
      title: PropTypes.string,
      descr: PropTypes.string,
      icon: PropTypes.string,
      borderColor: PropTypes.string,
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
  getThemeData: PropTypes.func,
  getLanguageData: PropTypes.func,
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
  allCoursesStatus: state.coursesTasks,
  themeList: state.themeTasks,
  languageList: state.languageTask,
  dataStatus: state.dataStatusTasks,
  pristine: isPristine('changeAllCourses')(state),
});

const mapStateToDispatch = dispatch => ({
  getThemeData: (count, statusEmptyData, statusLoading) => {
    getThemeData(count, statusEmptyData, statusLoading, dispatch);
  },
  getLanguageData: (count, statusEmptyData, statusLoading) => {
    getLanguageData(count, statusEmptyData, statusLoading, dispatch);
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

export default connect(mapStateToProps, mapStateToDispatch)(AdminAllCourses);
