import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import getData from '../../../scripts/getData';
import { PATH } from '../../../scripts/const';
import './navAdmin.sass';

function NavAdmin() {
  const [navList, setNavList] = useState('');
  const addListData = (res) => {
    setNavList(res);
  };

  useEffect(() => {
    getData(PATH.ADMINNAV, addListData);
  }, []);

  return (
    <div className="admin__menu__container">
      <ul className="menu__link__container">
        {navList.length ?
          navList.map(({ title = 'titlePlug' }) =>
            <li key={title}><NavLink to={}>{title}</NavLink></li>
          )
          : []
        }
      </ul>
    </div>
  );
}

export default NavAdmin;
