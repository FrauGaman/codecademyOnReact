import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isPristine } from 'redux-form';
import getData from '../../../scripts/getData';
import { sortData, filterDataByName } from '../../../scripts/changeData';
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

function AdminKnowledge({ knowledgeStatus, getKnowledgeData, removeData, createData, editData, pristine, sortKnowledgeData, filterDataByName }) {
  const [modalShow, setModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [initial, setInitial] = useState([]);

  useEffect(() => {
    getKnowledgeData();
  }, []);

  const submitData = value => {
    value.id = +new Date();
    const stateArr = [...[value]];
    createData(stateArr);
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
    setInitial(knowledgeStatus.find(item => item.id === id));
    setEditModalShow(true);
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
        removeData={removeData}
        tableData={knowledgeStatus}
        showModal={(id) => showEditForm(id)}
        sortKnowledgeData={(sortType) => sortKnowledgeData(sortType)}
        filterDataByName={(name) => filterDataByName(name)}
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

AdminKnowledge.propTypes = {
  knowledgeStatus: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })),
  getKnowledgeData: PropTypes.func,
  removeData: PropTypes.func,
  createData: PropTypes.func,
  editData: PropTypes.func,
  pristine: PropTypes.bool,
  sortKnowledgeData: PropTypes.func,
};

const mapStateToProps = state => ({
  knowledgeStatus: state.knowledgeTask,
  pristine: isPristine('changeKnowledge')(state),
});

const mapStateToDispatch = dispatch => ({
  getKnowledgeData: () => {
    getData(PATH.KNOWLEDGE, (res) => dispatch(KNOWLEDGE_ADD_DATA(res)));
  },
  removeData: (id) => {
    dispatch(KNOWLEDGE_REMOVE_DATA(id));
  },
  createData: (newData) => {
    dispatch(KNOWLEDGE_CREATE_DATA(newData));
  },
  editData: (state, value) => {
    dispatch(KNOWLEDGE_CHANGE_DATA(state, value));
  },
  sortKnowledgeData: (sortType) => {
    sortData(PATH.KNOWLEDGE, (res) => dispatch(KNOWLEDGE_ADD_DATA(res)), 'name', sortType);
  },
  filterDataByName: (name) => {
    filterDataByName(PATH.KNOWLEDGE, (res) => dispatch(KNOWLEDGE_ADD_DATA(res)), 'name', name);
  }
});

export default connect(mapStateToProps, mapStateToDispatch)(AdminKnowledge);
