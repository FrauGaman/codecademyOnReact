import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import getData from '../../../scripts/getData';
import { PATH } from '../../../scripts/const';
import './adminBurger.sass';

function AdminBurger() {
  const [navList, setNavList] = useState('');
  const [showAdminBurger, setAdminBurger] = useState('mobMenu');
  const [showAdminBurgerContent, setAdminBurgerContent] = useState('admin__burger__menu');
  const addListData = (res) => {
    setNavList(res);
  };

  const changeButtonClassName = () => {
    showAdminBurger === 'mobMenu' ? setAdminBurger(' mobMenu mobMenu_active') : setAdminBurger('mobMenu')
    showAdminBurgerContent === 'admin__burger__menu' ? setAdminBurgerContent('admin__burger__menu admin__burger__menu_active') : setAdminBurgerContent('admin__burger__menu');
  };

  const hideBurger = () => {
    setAdminBurger('mobMenu');
    setAdminBurgerContent('admin__burger__menu')
  };

  useEffect(() => {
    getData(PATH.ADMINNAV, addListData);
  }, []);
  return (
    <div className="admin__burger">
      <a href="#menu" className={showAdminBurger} onClick={() => changeButtonClassName()}>
        <span></span>
      </a>
      <div className={showAdminBurgerContent}>
        <ul className="menu__link__container">
          {navList.length ?
            navList.map(({ title = 'titlePlug', link = 'linkPlug' }) =>
              <li key={title} className="admin__burger__li"><NavLink to={`/admin${link}`} className="admin__burger__link" onClick={() => hideBurger()}>{title}</NavLink></li>
            )
            : []
          }
        </ul>
      </div>
    </div>
  );
}

export default AdminBurger;
