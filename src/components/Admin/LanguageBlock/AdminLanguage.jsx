import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isPristine } from 'redux-form';
import { setLoading, setDataStatusEmpty } from '../../../actions/dataStatus';
import LanguageTableTemplate from './LanguageTableTemplate';
import AdminBtn from '../AdminButton/AdminButton';
import ModalWindow from '../../ModalWindow';
import LanguageModalInner from './LanguageModalInner';
import PreloaderMini from '../../Preloader/PreloaderMini';
import { removeData, createData, editData, findData } from './dispatchLanguage';

function AdminLanguage({ languageStatus, removeData, createData, editData, pristine, findData, dataStatus, statusLoading, statusEmptyData }) {
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
    for (let i = 0; i < Math.ceil(languageStatus.count / limitNumber); i++) {
      helpArr.push(i);
    }
    setPageArr(helpArr);
  }, [languageStatus.count, limitNumber]);

  useEffect(() => {
    if (languageStatus.data !== undefined && languageStatus.data.length === 0) {
      if (pageNumber > 1) {
        setPageNumber(pageNumber - 1);
      }
    }
  }, [languageStatus.count]);

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
      editData(initial.id, languageStatus, value, sort, search, pageNumber, limitNumber, statusEmptyData, statusLoading);
      setEditModalShow(false);
    }
  };

  const showEditForm = (id) => {
    setInitial(languageStatus.data.find(item => item.id === id));
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
        <ModalWindow
          title={'Create new element'}
          show={modalShow}
          onHide={() => setModalShow(false)}
        >
          <LanguageModalInner onHide={() => setModalShow(false)} submitData={submitData} />
        </ModalWindow>

        <LanguageTableTemplate
          removeTableData={removeTableData}
          tableData={languageStatus}
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
        <ModalWindow
          title={'Edit elements'}
          show={editModalShow}
          onHide={() => setEditModalShow(false)}
        >
          <LanguageModalInner onHide={() => setEditModalShow(false)} initialValues={initial} submitData={editFormData} />
        </ModalWindow>
      </div>
    </div>
  );
}

AdminLanguage.propTypes = {
  languageStatus: PropTypes.shape({
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
  languageStatus: state.languageTask,
  dataStatus: state.dataStatusTasks,
  pristine: isPristine('changeLanguage')(state),
});
const mapStateToDispatch = dispatch => ({
  removeData: (id, sortType, name, pageNumber, limitNumber, statusEmptyData, statusLoading) => {
    removeData(id, sortType, name, pageNumber, limitNumber, statusEmptyData, statusLoading, dispatch);
  },
  createData: (newData, sortType, name, pageNumber, limitNumber, statusEmptyData, statusLoading) => {
    createData(newData, sortType, name, pageNumber, limitNumber, statusEmptyData, statusLoading, dispatch);
  },
  editData: (id, state, value, sortType, name, pageNumber, limitNumber, statusEmptyData, statusLoading) => {
    editData(id, state, value, sortType, name, pageNumber, limitNumber, statusEmptyData, statusLoading, dispatch);
  },
  findData: (sortType, name, pageNumber, limitNumber, statusEmptyData, statusLoading) => {
    findData(sortType, name, pageNumber, limitNumber, statusEmptyData, statusLoading, dispatch);
  },
  statusLoading: (loading) => {
    dispatch(setLoading(loading));
  },
  statusEmptyData: (emptyData) => {
    dispatch(setDataStatusEmpty(emptyData));
  },
});

export default connect(mapStateToProps, mapStateToDispatch)(AdminLanguage);
