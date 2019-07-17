import React, { useEffect, useState } from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import getData from '../../../scripts/getData';
import { PATH } from '../../../scripts/const';
import LanguageTableTemplate from './LanguageTableTemplate';
import AdminBtn from '../AdminButton/AdminButton';
import LanguageFormModel from '../CreateForms/LanguageFormModel';

function AdminLanguage() {
  const [modalShow, setModalShow] = useState(false);
  const [languageStatus, setLanguageStatus] = useState([]);
  const addData = (res) => {
    setLanguageStatus(res);
  };

  useEffect(() => {
    getData(PATH.LANGUAGE, addData);
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
        <LanguageFormModel
          show={modalShow}
          onHide={() => setModalShow(false)}
          tableData={languageStatus}
        />
      </ButtonToolbar>

      <LanguageTableTemplate tableData={languageStatus} />
    </React.Fragment>
  );
}

export default AdminLanguage;
