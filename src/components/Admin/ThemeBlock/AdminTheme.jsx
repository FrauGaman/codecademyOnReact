import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isPristine } from 'redux-form';
import getData from '../../../scripts/getData';
import { PATH } from '../../../scripts/const';
import {
  AddThemeData,
  RemoveThemeData,
  CreateThemeData,
  ChangeThemeData,
} from '../../../actions/actionThemeData';
import ThemeTableTemplate from './ThemeTableTemplate';
import AdminBtn from '../AdminButton/AdminButton';
import ThemeFormModal from './ThemeFormModal';
import { changeData } from '../../../scripts/changeData';

function AdminTheme({ themeStatus, getThemeData, removeData, createData, editData, pristine, findData }) {
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
    if (pristine) {
      const notChange = window.confirm('do you really want to leave without change?');
      if (notChange) {
        setEditModalShow(false);
      }
    } else {
      editData(themeStatus, value);
      setEditModalShow(false);
    }
  };

  const showEditForm = (id) => {
    setInitial(themeStatus.find(item => item.id === id));
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
      {modalShow && <ThemeFormModal
        title={'Create new element'}
        show={modalShow}
        onHide={() => setModalShow(false)}
        tabledata={themeStatus}
        submitData={submitData}
        createdata={createData}
      />}

      <ThemeTableTemplate
        tableData={themeStatus}
        removeData={removeData}
        showModal={(id) => showEditForm(id)}
        findData={(sortType, name) => findData(sortType, name)}
      />
      {editModalShow && <ThemeFormModal
        title={'Edit elements'}
        show={editModalShow}
        onHide={() => setEditModalShow(false)}
        initialValues={initial}
        submitData={changeData}
      />}
    </React.Fragment>
  );
}

AdminTheme.propTypes = {
  themeStatus: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    descr: PropTypes.string,
    link: PropTypes.string,
  })),
  getThemeData: PropTypes.func,
  removeData: PropTypes.func,
  createData: PropTypes.func,
  editData: PropTypes.func,
  pristine: PropTypes.bool,
  findData: PropTypes.func,
};

const mapStateToProps = state => ({
  themeStatus: state.themeTasks,
  pristine: isPristine('changeTheme')(state),
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
  editData: (state, value) => {
    dispatch(ChangeThemeData(state, value));
  },
  findData: (sortType, name) => {
    changeData(PATH.THEME, (res) => dispatch(AddThemeData(res)), 'name', sortType, '', 'name', name);
  },
});

export default connect(mapStateToProps, mapStateToDispatch)(AdminTheme);
