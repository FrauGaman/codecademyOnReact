import React, { useEffect, useState } from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { connect } from 'react-redux';
import { AddThemeData, RemoveThemeData, CreateThemeData } from '../../../actions/actionThemeData';

import getData from '../../../scripts/getData';
import { PATH } from '../../../scripts/const';
import ThemeTableTemplate from './ThemeTableTemplate';
import AdminBtn from '../AdminButton/AdminButton';
import ThemeFormModal from './ThemeFormModal';

function AdminTheme({ themeStatus, getThemeData, removeData, createData }) {
  const [modalShow, setModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [initial, setInitial] = useState([]);

  useEffect(() => {
    getThemeData();
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
    setInitial(themeStatus.find(item => item.id === id));
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
        <ThemeFormModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          tabledata={themeStatus}
          submitData={submitData}
          createdata={createData}
        />
      </ButtonToolbar>

      <ThemeTableTemplate tableData={themeStatus} removeData={removeData} showModal={(id) => showEditForm(id)} />
      <ThemeFormModal
        show={editModalShow}
        onHide={() => setModalShow(false)}
        initialValues = {initial}
        submitData={changeData}
      />
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
