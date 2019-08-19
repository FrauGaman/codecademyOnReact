import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import NavAdmin from './AdminNav/NavAdmin';
import './adminPanel.sass';
import AdminBurger from './AdminBurger/AdminBurger';
import getData from '../../scripts/getData';
import { PATH } from '../../scripts/const';

function AdminPanel({ children, userStatus }) {
  if (!userStatus.login) return <Redirect to="/login" />

  const [navList, setNavList] = useState([]);
  const addListData = (res) => {
    setNavList(res);
  };
  useEffect(() => {
    getData(PATH.ADMINNAV, addListData);
  }, []);


  return (
    <React.Fragment>
      <div className="admin__panel">
        <div className="admin__nav">
          <NavAdmin navList={navList} />
        </div>
        <div className="admin__nav__burger">
          <AdminBurger navList={navList} />
        </div>
        <div className="admin__panel__content">
          {children}
        </div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  userStatus: state.userStatusTasks,
});

export default connect(mapStateToProps)(AdminPanel);
