import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isPristine } from 'redux-form';
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
  const [sort, setSort] = useState('asc');
  const [search, setSearch] = useState('');
  const [limitNumber, setLimitNumber] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageArr, setPageArr] = useState([]);

  useEffect(() => {
    findData(sort, search, pageNumber, limitNumber);
  }, [sort, search, pageNumber, limitNumber]);

  useEffect(() => {
    const helpArr = [];
    for (let i = 0; i < Math.ceil(languageStatus.count / limitNumber); i++) {
      helpArr.push(i);
    }
    setPageArr(helpArr);
  }, [languageStatus.count, pageNumber, limitNumber]);

  useEffect(() => {
    if (languageStatus.data !== undefined) {
      if (languageStatus.data.length === 0) {
        if (pageNumber >= 1) {
          let clonePageNumber = pageNumber;
          clonePageNumber = clonePageNumber - 1;
          setPageNumber(clonePageNumber);
        }
      }
    }
  }, [languageStatus.count]);

  const chooseSort = () => (sort === 'asc') ? setSort('desc') : setSort('asc');
  const searchState = (searchValue) => setSearch(searchValue);
  const selectLimitNumber = (event) => {
    setLimitNumber(event.target.value);
    setPageNumber(1);
  };

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
