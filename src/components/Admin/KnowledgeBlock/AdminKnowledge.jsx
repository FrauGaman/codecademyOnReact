import React, { useEffect, useState } from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { connect } from 'react-redux';
import { AddKnowledgeData, CreateKnowledgeData, RemoveKnowledgeData } from '../../../actions/actionKnowledgeData';

import getData from '../../../scripts/getData';
import { PATH } from '../../../scripts/const';
import KnowledgeTableTemplate from './KnowledgeTableTemplate';
import AdminBtn from '../AdminButton/AdminButton';
import KnowledgeFormModalCreate from './KnowledgeFormModalCreate';

function AdminKnowledge({ knowledgeStatus, getKnowledgeData, removeData, createData }) {
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    getKnowledgeData();
  }, []);


  return (
    <React.Fragment>
      <ButtonToolbar>
        <AdminBtn
          className={'create__btn'}
          innerBtn={'Create'}
          position={{ span: 2, offset: 10 }}
          variant="primary"
          onClick={() => setModalShow(true)}
        />
        <KnowledgeFormModalCreate
          show={modalShow}
          onHide={() => setModalShow(false)}
          createdata={createData}
        />
      </ButtonToolbar>

      <KnowledgeTableTemplate removeData={removeData} tableData={knowledgeStatus} />
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  knowledgeStatus: state.knowledgeTask,
});

const mapStateToDispatch = dispatch => ({
  getKnowledgeData: () => {
    getData(PATH.KNOWLEDGE, (res) => dispatch(AddKnowledgeData(res)));
  },
  removeData: (id) => {
    dispatch(RemoveKnowledgeData(id));
  },
  createData: (newData) => {
    dispatch(CreateKnowledgeData(newData));
  },
});

export default connect(mapStateToProps, mapStateToDispatch)(AdminKnowledge);
