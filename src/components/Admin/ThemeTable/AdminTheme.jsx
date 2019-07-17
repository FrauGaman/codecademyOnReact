import React, { useEffect, useState } from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import getData from '../../../scripts/getData';
import { PATH } from '../../../scripts/const';
import ThemeTableTemplate from './ThemeTableTemplate';
import AdminBtn from '../AdminButton/AdminButton';
import ThemeFormModel from '../CreateForms/ThemeFormModel';

function AdminTheme() {
  const [modalShow, setModalShow] = useState(false);
  const [themeStatus, setThemeStatus] = useState([]);
  const addData = (res) => {
    setThemeStatus(res);
  };

  useEffect(() => {
    getData(PATH.THEME, addData);
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
        <ThemeFormModel
          show={modalShow}
          onHide={() => setModalShow(false)}
          tableData={themeStatus}
        />
      </ButtonToolbar>

      <ThemeTableTemplate tableData={themeStatus} />
    </React.Fragment>
  );
}

export default AdminTheme;
