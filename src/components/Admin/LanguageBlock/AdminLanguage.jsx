import React, { useEffect, useState } from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { connect } from 'react-redux';
import getData from '../../../scripts/getData';
import { PATH } from '../../../scripts/const';
import LanguageTableTemplate from './LanguageTableTemplate';
import AdminBtn from '../AdminButton/AdminButton';
import LanguageFormModelCreate from './LanguageFormModelCreate';
import { AddLanguageData, RemoveLanguageData, CreateLanguageData } from '../../../actions/actionLanguageData';

function AdminLanguage({ languageStatus, getLanguageData, removeData, createData }) {
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    getLanguageData();
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
        <LanguageFormModelCreate
          show={modalShow}
          onHide={() => setModalShow(false)}
          tabledata={languageStatus}
          createdata={createData}
        />
      </ButtonToolbar>

      <LanguageTableTemplate tableData={languageStatus} removeData={removeData} />
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
