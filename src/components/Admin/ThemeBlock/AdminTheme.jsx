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
} from '../../../actions/themeData';
import ThemeTableTemplate from './ThemeTableTemplate';
import AdminBtn from '../AdminButton/AdminButton';
import { changeData } from '../../../scripts/changeData';
import ModalWindow from '../../ModalWindow';
import ThemeModalInner from './ThemeModalInner';

function AdminTheme({ themeStatus, removeData, createData, editData, pristine, findData }) {
  const [modalShow, setModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [initial, setInitial] = useState([]);
  const [sort, setSort] = useState('asc');
  const [search, setSearch] = useState('');
  const [limitNumber, setLimitNumber] = useState('10');
  const [pageNumber, setPageNumber] = useState(1);
  const [pageArr, setPageArr] = useState([]);

  useEffect(() => {
    findData(sort, search, pageNumber, limitNumber);
  }, [sort, search, pageNumber, limitNumber]);

  useEffect(() => {
    const helpArr = [];
    for (let i = 0; i < Math.ceil(themeStatus.count / limitNumber); i++) {
      helpArr.push(i);
    }
    setPageArr(helpArr);
  }, [themeStatus.count, pageNumber, limitNumber]);

  useEffect(() => {
    if (themeStatus.data !== undefined) {
      if (themeStatus.data.length === 0) {
        if (pageNumber >= 1) {
          let clonePageNumber = pageNumber;
          clonePageNumber = clonePageNumber - 1;
          setPageNumber(clonePageNumber);
        }
      }
    }
  }, [themeStatus.count]);

  const chooseSort = () => (sort === 'asc') ? setSort('desc') : setSort('asc');
  const searchState = (searchValue) => setSearch(searchValue);
  const selectLimitNumber = (event) => {
    setLimitNumber(event.target.value);
    setPageNumber(1);
  };

  const submitData = value => {
    createData(value, sort, search, pageNumber, limitNumber);
    setModalShow(false);
  };

  const editFormData = value => {
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
    setInitial(themeStatus.data.find(item => item.id === id));
    setEditModalShow(true);
  };

  const removeTableData = (id) => {
    removeData(id, sort, search, pageNumber, limitNumber)
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
      <ModalWindow
        title={'Create new element'}
        show={modalShow}
        onHide={() => setModalShow(false)}
        formname={'themeForm'}
      >
        <ThemeModalInner submitData={submitData} />
      </ModalWindow>

      <ThemeTableTemplate
        tableData={themeStatus}
        removeTableData={removeTableData}
        showModal={(id) => showEditForm(id)}
        searchState={searchState}
        limitNumber={limitNumber}
        selectLimitNumber={selectLimitNumber}
        chooseSort={chooseSort}
        sort={sort}
        pageArr={pageArr}
        setPageNumber={setPageNumber}
      />
      <ModalWindow
        title={'Edit elements'}
        show={editModalShow}
        onHide={() => setEditModalShow(false)}
        formname={'themeForm'}
      >
        <ThemeModalInner initialValues={initial} submitData={editFormData} />
      </ModalWindow>
    </React.Fragment>
  );
}

AdminTheme.propTypes = {
  themeStatus: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      descr: PropTypes.string,
      link: PropTypes.string,
    })),
    count: PropTypes.string,
  }),
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
  removeData: (id, sortType, name, pageNumber, limitNumber) => {
    dispatch(RemoveThemeData(id)).then(() => changeData(PATH.THEME, (res) => dispatch(AddThemeData(res)), 'name', sortType, '', 'name', name, pageNumber, limitNumber));
  },
  createData: (newData, sortType, name, pageNumber, limitNumber) => {
    dispatch(CreateThemeData(newData)).then(() => changeData(PATH.THEME, (res) => dispatch(AddThemeData(res)), 'name', sortType, '', 'name', name, pageNumber, limitNumber));
  },
  editData: (state, value) => {
    dispatch(ChangeThemeData(state, value));
  },
  findData: (sortType, name, pageNumber, limitNumber) => {
    changeData(PATH.THEME, (res) => dispatch(AddThemeData(res)), 'name', sortType, '', 'name', name, pageNumber, limitNumber);
  },
});

export default connect(mapStateToProps, mapStateToDispatch)(AdminTheme);
