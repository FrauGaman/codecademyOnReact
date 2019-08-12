import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isPristine } from 'redux-form';
import { PATH } from '../../../scripts/const';
import {
  AddThemeData,
  RemoveThemeData,
  CreateThemeData,
  ChangeThemeData,
} from '../../../actions/themeData';
import { setLoading, setDataStatusEmpty } from '../../../actions/dataStatus';
import ThemeTableTemplate from './ThemeTableTemplate';
import AdminBtn from '../AdminButton/AdminButton';
import { changeData } from '../../../scripts/changeData';
import ModalWindow from '../../ModalWindow';
import ThemeModalInner from './ThemeModalInner';
import PreloaderMini from '../../Preloader/PreloaderMini';

function AdminTheme({ themeStatus, removeData, createData, editData, pristine, findData, dataStatus, statusLoading, statusEmptyData }) {
  const [modalShow, setModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [initial, setInitial] = useState([]);
  const [sort, setSort] = useState('asc');
  const [search, setSearch] = useState('');
  const [limitNumber, setLimitNumber] = useState('10');
  const [pageNumber, setPageNumber] = useState(1);
  const [pageArr, setPageArr] = useState([]);

  useEffect(() => {
    findData(sort, search, pageNumber, limitNumber, statusEmptyData, statusLoading);
  }, [sort, search, pageNumber, limitNumber]);

  useEffect(() => {
    const helpArr = [];
    for (let i = 0; i < Math.ceil(themeStatus.count / limitNumber); i++) {
      helpArr.push(i);
    }
    setPageArr(helpArr);
  }, [themeStatus.count, limitNumber]);

  useEffect(() => {
    if (themeStatus.data !== undefined && themeStatus.data.length === 0) {
      if (pageNumber > 1) {
        setPageNumber(pageNumber - 1);
      }
    }
  }, [themeStatus.count]);

  const chooseSort = () => (sort === 'asc') ? setSort('desc') : setSort('asc');
  const searchState = (searchValue) => setSearch(searchValue);
  const selectLimitNumber = (event) => {
    setLimitNumber(event.target.value);
    setPageNumber(1);
  };

  const submitData = value => {
    createData(value, sort, search, pageNumber, limitNumber, statusEmptyData, statusLoading);
    setModalShow(false);
  };

  const editFormData = value => {
    if (pristine) {
      const notChange = window.confirm('do you really want to leave without change?');
      if (notChange) {
        setEditModalShow(false);
      }
    } else {
      editData(initial.id, themeStatus, value, sort, search, pageNumber, limitNumber, statusEmptyData, statusLoading);
      setEditModalShow(false);
    }
  };

  const showEditForm = (id) => {
    setInitial(themeStatus.data.find(item => item.id === id));
    setEditModalShow(true);
  };

  const removeTableData = (id) => {
    removeData(id, sort, search, pageNumber, limitNumber, statusEmptyData, statusLoading);
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
          <ThemeModalInner onHide={() => setModalShow(false)} submitData={submitData} />
        </ModalWindow>

        <ThemeTableTemplate
          tableData={themeStatus}
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
          dataStatus={dataStatus}
        />
        <ModalWindow title={'Edit elements'} show={editModalShow} onHide={() => setEditModalShow(false)}>
          <ThemeModalInner onHide={() => setEditModalShow(false)} initialValues={initial} submitData={editFormData} />
        </ModalWindow>
      </div>
    </div>
  );
}

AdminTheme.propTypes = {
  themeStatus: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      descr: PropTypes.string,
      link: PropTypes.string,
    })),
    count: PropTypes.string,
  }),
  removeData: PropTypes.func,
  createData: PropTypes.func,
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
  themeStatus: state.themeTasks,
  dataStatus: state.dataStatusTasks,
  pristine: isPristine('changeTheme')(state),
});
const mapStateToDispatch = dispatch => ({
  removeData: (id, sortType, name, pageNumber, limitNumber, statusEmptyData, statusLoading) => {
    const options = {
      path: PATH.THEME,
      addData: (res) => dispatch(AddThemeData(res)),
      sortField: 'name',
      sortType,
      filterStr: '',
      field: 'name',
      name,
      pageNumber,
      limitNumber,
      statusEmptyData,
      statusLoading,
    };
    dispatch(RemoveThemeData(id, statusLoading)).then(() => changeData(options));
  },
  createData: (newData, sortType, name, pageNumber, limitNumber, statusEmptyData, statusLoading) => {
    const options = {
      path: PATH.THEME,
      addData: (res) => dispatch(AddThemeData(res)),
      sortField: 'name',
      sortType,
      filterStr: '',
      field: 'name',
      name,
      pageNumber,
      limitNumber,
      statusEmptyData,
      statusLoading,
    };
    dispatch(CreateThemeData(newData, statusLoading)).then(() => changeData(options));
  },
  editData: (id, state, value, sortType, name, pageNumber, limitNumber, statusEmptyData, statusLoading) => {
    const options = {
      path: PATH.THEME,
      addData: (res) => dispatch(AddThemeData(res)),
      sortField: 'name',
      sortType,
      filterStr: '',
      field: 'name',
      name,
      pageNumber,
      limitNumber,
      statusEmptyData,
      statusLoading,
    };
    dispatch(ChangeThemeData(id, state, value, statusLoading)).then(() => changeData(options));
  },
  findData: (sortType, name, pageNumber, limitNumber, statusEmptyData, statusLoading) => {
    const options = {
      path: PATH.THEME,
      addData: (res) => dispatch(AddThemeData(res)),
      sortField: 'name',
      sortType,
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

export default connect(mapStateToProps, mapStateToDispatch)(AdminTheme);
