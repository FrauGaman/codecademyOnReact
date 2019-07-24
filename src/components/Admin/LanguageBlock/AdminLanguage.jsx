import React, { useEffect, useState } from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { connect } from 'react-redux';
import getData from '../../../scripts/getData';
import { PATH } from '../../../scripts/const';
import LanguageTableTemplate from './LanguageTableTemplate';
import AdminBtn from '../AdminButton/AdminButton';
import LanguageFormModal from './LanguageFormModal';
import { AddLanguageData, RemoveLanguageData, CreateLanguageData } from '../../../actions/actionLanguageData';

function AdminLanguage({ languageStatus, getLanguageData, removeData, createData }) {
  const [modalShow, setModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [initial, setInitial] = useState([]);

  useEffect(() => {
    getLanguageData();
  }, []);

  const submitData = value => {
    value.id = +new Date();
    const stateArr = [...[value]];
    createData(stateArr);
    setModalShow(false);
  };

  const changeData = value => {
    value.id = +new Date();
    console.log(value);
    setEditModalShow(false);
  };

  const showEditForm = (id) => {
    setInitial(languageStatus.find(item => item.id === id));
    setEditModalShow(true);
  };

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
        <LanguageFormModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          tabledata={languageStatus}
          submitData={submitData}
          createdata={createData}
        />
      </ButtonToolbar>

      <LanguageTableTemplate tableData={languageStatus} removeData={removeData} showModal={(id) => showEditForm(id)} />
      <LanguageFormModal
        show={editModalShow}
        onHide={() => setEditModalShow(false)}
        initialValues ={initial}
        submitData={changeData}
      />
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  languageStatus: state.languageTask,
});
const mapStateToDispatch = dispatch => ({
  getLanguageData: () => {
    getData(PATH.LANGUAGE, (res) => dispatch(AddLanguageData(res)));
  },
  removeData: (id) => {
    dispatch(RemoveLanguageData(id));
  },
  createData: (newData) => {
    dispatch(CreateLanguageData(newData));
  },
});

export default connect(mapStateToProps, mapStateToDispatch)(AdminLanguage);
