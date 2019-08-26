import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './adminBurger.sass';

function AdminBurger({ navList }) {
  const [showAdminBurger, setAdminBurger] = useState('mobMenu');
  const [showAdminBurgerContent, setAdminBurgerContent] = useState('admin__burger__menu');
  const changeButtonClassName = () => {
    showAdminBurger === 'mobMenu' ? setAdminBurger(' mobMenu mobMenu_active') : setAdminBurger('mobMenu');
    showAdminBurgerContent === 'admin__burger__menu' ? setAdminBurgerContent('admin__burger__menu admin__burger__menu_active') : setAdminBurgerContent('admin__burger__menu');
  };
  const hideBurger = () => {
    setAdminBurger('mobMenu');
    setAdminBurgerContent('admin__burger__menu');
  };
  return (
    <div className="admin__burger">
      <a href="#menu" className={showAdminBurger} onClick={() => changeButtonClassName()}>
        <span></span>
      </a>
      <div className={showAdminBurgerContent}>
        <ul className="menu__link__container">
          {navList.length &&
            navList.map(({ title = 'titlePlug', link = 'linkPlug' }) =>
              <li key={title} className="admin__burger__li"><NavLink to={`/admin${link}`} className="admin__burger__link" onClick={() => hideBurger()}>{title}</NavLink></li>
            )
          }
        </ul>
      </div>
    </div>
  );
}

AdminBurger.propTypes = {
  navList: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
  })),
};

export default AdminBurger;
