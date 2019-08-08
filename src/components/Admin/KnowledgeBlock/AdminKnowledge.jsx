import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isPristine } from 'redux-form';
import { changeData } from '../../../scripts/changeData';
import { PATH } from '../../../scripts/const';
import {
  AddKnowledgeData,
  ChangeKnowledgeData,
  CreateKnowledgeData,
  RemoveKnowledgeData,
} from '../../../actions/knowledgeData';
import KnowledgeTableTemplate from './KnowledgeTableTemplate';
import AdminBtn from '../AdminButton/AdminButton';
import ModalWindow from '../../ModalWindow';
import KnowledgeModalInner from './KnowledgeModalInner';
import PreloaderMini from '../../Preloader/PreloaderMini';

function AdminKnowledge({ knowledgeStatus, removeData, createData, editData, pristine, findData }) {
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
    for (let i = 0; i < Math.ceil(knowledgeStatus.count / limitNumber); i++) {
      helpArr.push(i);
    }
    setPageArr(helpArr);
  }, [knowledgeStatus.count, limitNumber]);

  useEffect(() => {
    if (knowledgeStatus.data !== undefined && knowledgeStatus.data.length === 0) {
      if (pageNumber > 1) {
        setPageNumber(pageNumber - 1);
      }
    }
  }, [knowledgeStatus.count]);

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
      editData(initial.id, knowledgeStatus, value, sort, search, pageNumber, limitNumber, setGetDataStatus);
      setEditModalShow(false);
    }
  };

  const showEditForm = (id) => {
    setInitial(knowledgeStatus.data.find(item => item.id === id));
    setEditModalShow(true);
  };

  const removeTableData = (id) => {
    removeData(id, sort, search, pageNumber, limitNumber, setGetDataStatus);
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
        <ModalWindow title={'Create new element'} show={modalShow} onHide={() => setModalShow(false)} submitData={submitData}>
          <KnowledgeModalInner onHide={() => setModalShow(false)} submitData={submitData} />
        </ModalWindow>

        <KnowledgeTableTemplate
          removeTableData={removeTableData}
          tableData={knowledgeStatus}
          showModal={(id) => showEditForm(id)}
          searchState={searchState}
          limitNumber={limitNumber}
          selectLimitNumber={selectLimitNumber}
          chooseSort={chooseSort}
          sort={sort}
          pageArr={pageArr}
          setPageNumber={setPageNumber}
          pageNumber={pageNumber}
          errorBlock={errorBlock}
        />
        <ModalWindow title={'Edit elements'} show={editModalShow} onHide={() => setEditModalShow(false)}>
          <KnowledgeModalInner onHide={() => setEditModalShow(false)} initialValues={initial} submitData={editFormData} />
        </ModalWindow>
      </div>
    </div>

  );
}

AdminKnowledge.propTypes = {
  knowledgeStatus: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })),
    count: PropTypes.string,
  }),
  getKnowledgeData: PropTypes.func,
  removeData: PropTypes.func,
  createData: PropTypes.func,
  editData: PropTypes.func,
  pristine: PropTypes.bool,
  sortKnowledgeData: PropTypes.func,
  findData: PropTypes.func,
};

const mapStateToProps = state => ({
  knowledgeStatus: state.knowledgeTask,
  pristine: isPristine('changeKnowledge')(state),
});

const mapStateToDispatch = dispatch => ({
  removeData: (id, sortType, name, pageNumber, limitNumber, setGetDataStatus) => {
    const options = {
      path: PATH.KNOWLEDGE,
      addData: (res) => dispatch(AddKnowledgeData(res)),
      sortField: 'name',
      sortType,
      filterStr: '',
      field: 'name',
      name,
      pageNumber,
      limitNumber,
      setGetDataStatus,
    };
    dispatch(RemoveKnowledgeData(id, setGetDataStatus)).then(() => changeData(options));
  },
  createData: (newData, sortType, name, pageNumber, limitNumber, setGetDataStatus) => {
    const options = {
      path: PATH.KNOWLEDGE,
      addData: (res) => dispatch(AddKnowledgeData(res)),
      sortField: 'name',
      sortType,
      filterStr: '',
      field: 'name',
      name,
      pageNumber,
      limitNumber,
      setGetDataStatus,
    };
    dispatch(CreateKnowledgeData(newData, setGetDataStatus)).then(() => changeData(options));
  },
  editData: (id, state, value, sortType, name, pageNumber, limitNumber, setGetDataStatus) => {
    const options = {
      path: PATH.KNOWLEDGE,
      addData: (res) => dispatch(AddKnowledgeData(res)),
      sortField: 'name',
      sortType,
      filterStr: '',
      field: 'name',
      name,
      pageNumber,
      limitNumber,
      setGetDataStatus,
    };
    dispatch(ChangeKnowledgeData(id, state, value, setGetDataStatus)).then(() => changeData(options));
  },
  findData: (sortType, name, pageNumber, limitNumber, setGetDataStatus, setErrorBlock) => {
    const options = {
      path: PATH.KNOWLEDGE,
      addData: (res) => dispatch(AddKnowledgeData(res)),
      sortField: 'name',
      sortType,
      name,
      pageNumber,
      limitNumber,
      setGetDataStatus,
      setErrorBlock,
    };
    return changeData(options);
  },
});

export default connect(mapStateToProps, mapStateToDispatch)(AdminKnowledge);
