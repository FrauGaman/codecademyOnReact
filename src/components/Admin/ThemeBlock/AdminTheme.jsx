import React, { useEffect, useState } from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { connect } from 'react-redux';
import { AddThemeData, RemoveThemeData } from '../../../actions/actionThemeData';

import getData from '../../../scripts/getData';
import { PATH } from '../../../scripts/const';
import ThemeTableTemplate from './ThemeTableTemplate';
import AdminBtn from '../AdminButton/AdminButton';
import ThemeFormModel from './ThemeFormModel';

function AdminTheme({ themeStatus, getThemeData, removeData }) {
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
        <ThemeFormModel
          show={modalShow}
          onHide={() => setModalShow(false)}
          tabledata={themeStatus}
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
})

export default connect(mapStateToProps, mapStateToDispatch)(AdminTheme);
