import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isPristine } from 'redux-form';
import { PATH } from '../../../scripts/const';
import {
  LANGUAGE_ADD_DATA,
  LANGUAGE_REMOVE_DATA,
  CreateLanguageData,
  ChangeLanguageData,
} from '../../../actions/actionLanguageData';
import LanguageTableTemplate from './LanguageTableTemplate';
import AdminBtn from '../AdminButton/AdminButton';
import LanguageFormModal from './LanguageFormModal';
import { changeData } from '../../../scripts/changeData';

function AdminLanguage({ languageStatus, removeData, createData, editData, pristine, findData }) {
  const [modalShow, setModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [initial, setInitial] = useState([]);

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
      editData(languageStatus, value);
      setEditModalShow(false);
    }
  };

  const showEditForm = (id) => {
    setInitial(languageStatus.data.find(item => item.id === id));
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
      {modalShow && <LanguageFormModal
        title={'Create new element'}
        show={modalShow}
        onHide={() => setModalShow(false)}
        tabledata={languageStatus}
        submitData={submitData}
        createdata={createData}
      />}

      <LanguageTableTemplate
        tableData={languageStatus}
        removeData={removeData}
        showModal={(id) => showEditForm(id)}
        findData={(sortType, name, pageNumber, limitNumber) => findData(sortType, name, pageNumber, limitNumber)}
      />
      {editModalShow && <LanguageFormModal
        title={'Edit elements'}
        show={editModalShow}
        onHide={() => setEditModalShow(false)}
        initialValues={initial}
        submitData={changeData}
      />}
    </React.Fragment>
  );
}

AdminLanguage.propTypes = {
  languageStatus: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    descr: PropTypes.string,
    link: PropTypes.string,
  })),
  getLanguageData: PropTypes.func,
  removeData: PropTypes.func,
  createData: PropTypes.func,
  editData: PropTypes.func,
  pristine: PropTypes.bool,
  findData: PropTypes.func,
};

const mapStateToProps = state => ({
  languageStatus: state.languageTask,
  pristine: isPristine('changeLanguage')(state),
});
const mapStateToDispatch = dispatch => ({
  removeData: (id) => {
    dispatch(LANGUAGE_REMOVE_DATA(id));
  },
  createData: (newData) => {
    dispatch(CreateLanguageData(newData));
  },
  editData: (state, value) => {
    dispatch(ChangeLanguageData(state, value));
  },
  findData: (sortType, name, pageNumber, limitNumber) => {
    changeData(PATH.LANGUAGE, (res) => dispatch(LANGUAGE_ADD_DATA(res)), 'name', sortType, '', 'name', name, pageNumber, limitNumber);
  },
});

export default connect(mapStateToProps, mapStateToDispatch)(AdminLanguage);
