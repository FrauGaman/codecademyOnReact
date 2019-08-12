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
} from '../../../actions/skillData';
import { setLoading, setDataStatusEmpty } from '../../../actions/dataStatus';
import { AddThemeData } from '../../../actions/themeData';
import { AddLanguageData } from '../../../actions/languageData';
import SkillTableTemplate from './SkillTableTemplate';
import AdminBtn from '../AdminButton/AdminButton';
import { changeData } from '../../../scripts/changeData';
import ModalWindow from '../../ModalWindow';
import SkillModalInner from './SkillModalInner';
import PreloaderMini from '../../Preloader/PreloaderMini';

function AdminSkill({ skillStatus, themeList, languageList, getThemeData, getLanguageData, createData, removeData, editData, pristine, findData, dataStatus, statusLoading, statusEmptyData }) {
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
  }, [themeList.count, languageList.count]);

  useEffect(() => {
    const helpArr = [];
    for (let i = 0; i < Math.ceil(skillStatus.count / limitNumber); i++) {
      helpArr.push(i);
    }
    setPageArr(helpArr);
  }, [skillStatus.count, limitNumber]);

  useEffect(() => {
    if (skillStatus.data !== undefined && skillStatus.data.length === 0) {
      if (pageNumber > 1) {
        setPageNumber(pageNumber - 1);
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
    const valueData = {
      ...value,
      theme: value.theme && value.theme.map(item => +item.value),
      language:  value.language && value.language.map(item => +item.value),
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
        theme: (value.theme !== [] && value.theme.map(item => item !== null)) && value.theme.map(item => +item.value),
        language: (value.language !== [] && value.language.map(item => item !== null)) && value.language.map(item => +item.value),
      };
      editData(initial.id, skillStatus, valueData, sort, filter, search, pageNumber, limitNumber, statusEmptyData, statusLoading);
      setEditModalShow(false);
    }
  };

  const showEditForm = (id) => {
    const themeOptions = themeList.data && themeList.data.map(item => { return { value: item.id, label: item.name}});
    const languageOptions = languageList.data && languageList.data.map(item => { return { value: item.id, label: item.name}});
    let skillData = JSON.stringify(skillStatus.data);
    skillData = JSON.parse(skillData);
    let arrTheme = [];
    let arrLang = [];

    skillData.map(item => {
      if (item.id === id) {
        themeOptions.map(elem => {
          item.theme && item.theme.map(inst => {
            if(elem.value === inst) {
              arrTheme.push(elem);
            }
          })
        })
      }
      item.theme = arrTheme;
    });

    skillData.map(item => {
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

    setInitial(skillData.find(item => item.id === id));
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
          <SkillModalInner themeList={themeList} languageList={languageList} onHide={() => setModalShow(false)} submitData={submitData} />
        </ModalWindow>
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
          pageNumber={pageNumber}
          filterState={filterState}
          dataStatus={dataStatus}
        />
        <ModalWindow title={'Edit elements'} show={editModalShow} onHide={() => setEditModalShow(false)}>
          <SkillModalInner themeList={themeList} languageList={languageList} onHide={() => setEditModalShow(false)} initialValues={initial} submitData={editFormData} />
        </ModalWindow>
      </div>
    </div>
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
  dataStatus: PropTypes.shape({
    loading: PropTypes.bool,
    emptyData: PropTypes.bool,
  }),
  statusLoading: PropTypes.func,
  statusEmptyData: PropTypes.func,
};

const mapStateToProps = state => ({
  skillStatus: state.skillTasks,
  themeList: state.themeTasks,
  languageList: state.languageTask,
  dataStatus: state.dataStatusTasks,
  pristine: isPristine('changeSkill')(state),
});
const mapStateToDispatch = dispatch => ({
  getThemeData: (count, statusEmptyData, statusLoading) => {
    const options = {
      path: PATH.THEME,
      addData: (res) => dispatch(AddThemeData(res)),
      limitNumber: count,
      statusEmptyData: () => {},
      statusLoading,
    };
    changeData(options);
  },
  getLanguageData: (count, statusEmptyData, statusLoading) => {
    const options = {
      path: PATH.LANGUAGE,
      addData: (res) => dispatch(AddLanguageData(res)),
      limitNumber: count,
      statusEmptyData: () => {},
      statusLoading,
    };
    changeData(options);
  },
  removeData: (id, sortType, filterStr, name, pageNumber, limitNumber, statusEmptyData, statusLoading) => {
    const options = {
      path: PATH.SKILLPATH,
      addData: (res) => dispatch(AddSkillData(res)),
      sortField: 'title',
      sortType,
      filterStr,
      field: 'title',
      name,
      pageNumber,
      limitNumber,
      statusEmptyData,
      statusLoading,
    };
    dispatch(RemoveSkillData(id, statusLoading)).then(() => changeData(options));
  },
  createData: (newData, sortType, filterStr, name, pageNumber, limitNumber, statusEmptyData, statusLoading) => {
    const options = {
      path: PATH.SKILLPATH,
      addData: (res) => dispatch(AddSkillData(res)),
      sortField: 'title',
      sortType,
      filterStr,
      field: 'title',
      name,
      pageNumber,
      limitNumber,
      statusEmptyData,
      statusLoading,
    };
    dispatch(CreateSkillData(newData, statusLoading)).then(() => changeData(options));
  },
  editData: (id, state, value, sortType, filterStr, name, pageNumber, limitNumber, statusEmptyData, statusLoading) => {
    const options = {
      path: PATH.SKILLPATH,
      addData: (res) => dispatch(AddSkillData(res)),
      sortField: 'title',
      sortType,
      filterStr,
      field: 'title',
      name,
      pageNumber,
      limitNumber,
      statusEmptyData,
      statusLoading,
    };
    dispatch(ChangeSkillData(id, state, value, statusLoading)).then(() => changeData(options));
  },
  findData: (sortType, filterStr, name, pageNumber, limitNumber, statusEmptyData, statusLoading) => {
    const options = {
      path: PATH.SKILLPATH,
      addData: (res) => dispatch(AddSkillData(res)),
      sortField: 'title',
      sortType,
      filterStr,
      field: 'title',
      name,
      pageNumber,
      limitNumber,
      statusEmptyData,
      statusLoading,
    };
    changeData(options);
  },
  statusLoading: (loading) => {
    dispatch(setLoading(loading));
  },
  statusEmptyData: (emptyData) => {
    dispatch(setDataStatusEmpty(emptyData));
  },
});

export default connect(mapStateToProps, mapStateToDispatch)(AdminSkill);
