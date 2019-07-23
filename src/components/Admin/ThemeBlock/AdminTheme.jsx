import React, { useEffect, useState } from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { connect } from 'react-redux';
import { AddThemeData, RemoveThemeData, CreateThemeData } from '../../../actions/actionThemeData';

import getData from '../../../scripts/getData';
import { PATH } from '../../../scripts/const';
import ThemeTableTemplate from './ThemeTableTemplate';
import AdminBtn from '../AdminButton/AdminButton';
import ThemeFormModelCreate from './ThemeFormModelCreate';

function AdminTheme({ themeStatus, getThemeData, removeData, createData }) {
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    getThemeData();
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
        <ThemeFormModelCreate
          show={modalShow}
          onHide={() => setModalShow(false)}
          tabledata={themeStatus}
          createdata={createData}
        />
      </ButtonToolbar>

      <ThemeTableTemplate tableData={themeStatus} removeData={removeData} />
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  themeStatus: state.themeTasks,
});
const mapStateToDispatch = dispatch => ({
  getThemeData: () => {
    getData(PATH.THEME, (res) => dispatch(AddThemeData(res)));
  },
  removeData: (id) => {
    dispatch(RemoveThemeData(id));
  },
  createData: (newData) => {
    dispatch(CreateThemeData(newData));
  },
});

export default connect(mapStateToProps, mapStateToDispatch)(AdminTheme);