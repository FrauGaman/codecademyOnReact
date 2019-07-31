import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isPristine } from 'redux-form';
import { changeData } from '../../../scripts/changeData';
import { PATH } from '../../../scripts/const';
import {
  KNOWLEDGE_ADD_DATA,
  KNOWLEDGE_CHANGE_DATA,
  KNOWLEDGE_CREATE_DATA,
  KNOWLEDGE_REMOVE_DATA,
} from '../../../actions/actionKnowledgeData';
import KnowledgeTableTemplate from './KnowledgeTableTemplate';
import AdminBtn from '../AdminButton/AdminButton';
import KnowledgeFormModal from './KnowledgeFormModal';

function AdminKnowledge({ knowledgeStatus, removeData, createData, editData, pristine, findData }) {
  const [modalShow, setModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [initial, setInitial] = useState([]);
  const [sort, setSort] = useState('asc');
  const [search, setSearch] = useState('');
  const [limitNumber, setLimitNumber] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageArr, setPageArr] = useState([]);

  useEffect(() => {
    findData(sort, search, pageNumber, limitNumber);
  }, [sort, search, pageNumber, limitNumber]);

  useEffect(() => {
    const helpArr = [];
    for (let i = 0; i < Math.ceil(knowledgeStatus.count / limitNumber); i++) {
      helpArr.push(i);
    }
    setPageArr(helpArr);
  }, [knowledgeStatus.count, pageNumber, limitNumber]);

  useEffect(() => {
    if (knowledgeStatus.data !== undefined) {
      if (knowledgeStatus.data.length === 0) {
        if (pageNumber >= 1) {
          let clonePageNumber = pageNumber;
          clonePageNumber = clonePageNumber - 1;
          setPageNumber(clonePageNumber);
        }
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
    createData(value, sort, search, pageNumber, limitNumber);
    setModalShow(false);
  };

  const changeData = value => {
    if (pristine) {
      const notChange = window.confirm('do you really want to leave without change?');
      if (notChange) {
        setEditModalShow(false);
      }
    } else {
      editData(knowledgeStatus, value);
      setEditModalShow(false);
    }
  };

  const showEditForm = (id) => {
    setInitial(knowledgeStatus.data.find(item => item.id === id));
    setEditModalShow(true);
  };

  const removeTableData = (id) => {
    removeData(id, sort, search, pageNumber, limitNumber)
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
      {modalShow && <KnowledgeFormModal
        title={'Create new element'}
        show={modalShow}
        onHide={() => setModalShow(false)}
        submitData={submitData}
      />}

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
      />
      {editModalShow && <KnowledgeFormModal
        title={'Edit elements'}
        show={editModalShow}
        onHide={() => setEditModalShow(false)}
        initialValues={initial}
        submitData={changeData}
      />}
    </React.Fragment>
  );
}

// AdminKnowledge.propTypes = {
//   knowledgeStatus: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number,
//     name: PropTypes.string,
//   })),
//   getKnowledgeData: PropTypes.func,
//   removeData: PropTypes.func,
//   createData: PropTypes.func,
//   editData: PropTypes.func,
//   pristine: PropTypes.bool,
//   sortKnowledgeData: PropTypes.func,
// };

const mapStateToProps = state => ({
  knowledgeStatus: state.knowledgeTask,
  pristine: isPristine('changeKnowledge')(state),
});

const mapStateToDispatch = dispatch => ({
  removeData: (id, sortType, name, pageNumber, limitNumber) => {
    dispatch(KNOWLEDGE_REMOVE_DATA(id)).then(() => changeData(PATH.KNOWLEDGE, (res) => dispatch(KNOWLEDGE_ADD_DATA(res)), 'name', sortType, '', 'name', name, pageNumber, limitNumber));
  },
  createData: (newData, sortType, name, pageNumber, limitNumber) => {
    dispatch(KNOWLEDGE_CREATE_DATA(newData)).then(() => changeData(PATH.KNOWLEDGE, (res) => dispatch(KNOWLEDGE_ADD_DATA(res)), 'name', sortType, '', 'name', name, pageNumber, limitNumber));
  },
  editData: (state, value) => {
    dispatch(KNOWLEDGE_CHANGE_DATA(state, value));
  },
  findData: (sortType, name, pageNumber, limitNumber) => {
    changeData(PATH.KNOWLEDGE, (res) => dispatch(KNOWLEDGE_ADD_DATA(res)), 'name', sortType, '', 'name', name, pageNumber, limitNumber);
  },
});

export default connect(mapStateToProps, mapStateToDispatch)(AdminKnowledge);
