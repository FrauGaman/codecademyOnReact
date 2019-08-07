import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isPristine } from 'redux-form';
import { PATH } from '../../../scripts/const';
import {
  AddLanguageData,
  RemoveLanguageData,
  CreateLanguageData,
  ChangeLanguageData,
} from '../../../actions/languageData';
import LanguageTableTemplate from './LanguageTableTemplate';
import AdminBtn from '../AdminButton/AdminButton';
import { changeData } from '../../../scripts/changeData';
import ModalWindow from '../../ModalWindow';
import LanguageModalInner from './LanguageModalInner';
import PreloaderMini from '../../Preloader/PreloaderMini';

function AdminLanguage({ languageStatus, removeData, createData, editData, pristine, findData }) {
  const [modalShow, setModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [initial, setInitial] = useState([]);
  const [sort, setSort] = useState('asc');
  const [search, setSearch] = useState('');
  const [limitNumber, setLimitNumber] = useState('10');
  const [pageNumber, setPageNumber] = useState(1);
  const [pageArr, setPageArr] = useState([]);
  const [getDataStatus, setGetDataStatus] = useState(true);
  const [errorBlock, setErrorBlock] = useState(false);

  useEffect(() => {
    findData(sort, search, pageNumber, limitNumber, setGetDataStatus, setErrorBlock);
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
    createData(value, sort, search, pageNumber, limitNumber, setGetDataStatus);
    setModalShow(false);
  };

  const editFormData = value => {
    if (pristine) {
      const notChange = window.confirm('do you really want to leave without change?');
      if (notChange) {
        setEditModalShow(false);
      }
    } else {
      editData(languageStatus, value, setGetDataStatus);
      setEditModalShow(false);
    }
  };

  const showEditForm = (id) => {
    setInitial(languageStatus.data.find(item => item.id === id));
    setEditModalShow(true);
  };

  const removeTableData = (id) => {
    removeData(id, sort, search, pageNumber, limitNumber, setGetDataStatus)
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
          position={{ span: 2, offset: 10 }}
          variant="primary"
          onClick={() => setModalShow(true)}
        />
        <ModalWindow
          title={'Create new element'}
          show={modalShow}
          onHide={() => setModalShow(false)}
          formname={'languageForm'}
        >
          <LanguageModalInner submitData={submitData} />
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
          errorBlock={errorBlock}
        />
        <ModalWindow
          title={'Edit elements'}
          show={editModalShow}
          onHide={() => setEditModalShow(false)}
          formname={'languageForm'}
        >
          <LanguageModalInner initialValues={initial} submitData={editFormData} />
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
  getLanguageData: PropTypes.func,
  removeData: PropTypes.func,
  createData: PropTypes.func,
  editData: PropTypes.func,
  pristine: PropTypes.bool,
  findData: PropTypes.func,
};

const mapStateToProps = state => ({
  languageStatus: state.languageTask,
  pristine: isPristine('changeLanguage')(state),
});
const mapStateToDispatch = dispatch => ({
  removeData: (id, sortType, name, pageNumber, limitNumber, setGetDataStatus) => {
    const options = {
      path: PATH.LANGUAGE,
      addData: (res) => dispatch(AddLanguageData(res)),
      sortField: 'name',
      sortType,
      filterStr: '',
      field: 'name',
      name,
      pageNumber,
      limitNumber,
      setGetDataStatus,
    };
    dispatch(RemoveLanguageData(id,setGetDataStatus)).then(() => changeData(options));
  },
  createData: (newData, sortType, name, pageNumber, limitNumber,setGetDataStatus) => {
    const options = {
      path: PATH.LANGUAGE,
      addData: (res) => dispatch(AddLanguageData(res)),
      sortField: 'name',
      sortType,
      filterStr: '',
      field: 'name',
      name,
      pageNumber,
      limitNumber,
      setGetDataStatus,
    };
    dispatch(CreateLanguageData(newData, setGetDataStatus)).then(() => changeData(options));
  },
  editData: (state, value, setGetDataStatus) => {
    dispatch(ChangeLanguageData(state, value,setGetDataStatus));
  },
  findData: (sortType, name, pageNumber, limitNumber, setGetDataStatus, setErrorBlock) => {
    const options = {
      path: PATH.LANGUAGE,
      addData: (res) => dispatch(AddLanguageData(res)),
      sortField: 'name',
      sortType,
      name,
      pageNumber,
      limitNumber,
      setGetDataStatus,
      setErrorBlock,
    };
    changeData(options);
  },
});

export default connect(mapStateToProps, mapStateToDispatch)(AdminLanguage);
