import React, { useState, useEffect } from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import NavAdmin from './AdminNav/NavAdmin';
import './adminPanel.sass';
import AdminBurger from './AdminBurger/AdminBurger';
import getData from '../../scripts/getData';
import { PATH } from '../../scripts/const';

function AdminPanel({ children }) {
  const login = !!localStorage.getItem('accessToken');
  if(!login) return <Redirect to={{
    pathname: `${PATH.LOGIN}`,
    state: { from: window.location.pathname },
  }}/>;

  const [navList, setNavList] = useState([]);
  const addListData = (res) => {
    setNavList(res);
  };
  useEffect(() => {
    getData(PATH.ADMINNAV, addListData);
  }, []);

  const clear = () => {
    localStorage.clear();
  };

  return (
    <React.Fragment>
      <div className="admin__panel">
        <div className="admin__nav">
          <NavAdmin navList={navList} />
        </div>
        <div className="admin__nav__burger">
          <AdminBurger navList={navList} />
        </div>
        {
          <div onClick={() => clear()} className="clear__storage__box">
            <NavLink className="clear__storage__link" to={{pathname: `${PATH.LOGIN}`, state: {from: `${PATH.FIRST}`}}}>Log out</NavLink>
          </div>
        }
        <div className="admin__panel__content">
          {children}
        </div>
      </div>
    </React.Fragment>
  );
}

export default AdminPanel;
