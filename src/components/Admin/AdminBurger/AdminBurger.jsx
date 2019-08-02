import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import getData from '../../../scripts/getData';
import { PATH } from '../../../scripts/const';
import './adminBurger.sass';

function AdminBurger() {
  const [navList, setNavList] = useState('');
  const [showAdminBurger, setAdminBurger] = useState('mobMenu');
  const addListData = (res) => {
    setNavList(res);
  };

  console.log(showAdminBurger);

  useEffect(() => {
    getData(PATH.ADMINNAV, addListData);
  }, []);
  return (
    <div className="admin__burger">
      <a href="#menu" className={showAdminBurger} onClick={() => setAdminBurger('mobMenu_active')}>
        <span></span>
      </a>
      <div className="admin__burger__menu">
        <ul className="menu__link__container">
          {navList.length ?
            navList.map(({ title = 'titlePlug', link = 'linkPlug' }) =>
              <li key={title} className="admin__burger__li"><NavLink to={`/admin${link}`} className="admin__burger__link">{title}</NavLink></li>
            )
            : []
          }
        </ul>
      </div>
    </div>
  );
}

export default AdminBurger;
