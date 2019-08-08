import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './navAdmin.sass';

function NavAdmin({ navList }) {
  return (
    <div className="admin__menu__container">
      <ul className="menu__link__container">
        {!!navList.length &&
          navList.map(({ title = 'titlePlug', link = 'linkPlug' }) =>
            <li key={title}><NavLink to={`/admin${link}`}>{title}</NavLink></li>
          )
        }
      </ul>
    </div>
  );
}

NavAdmin.propTypes = {
  navList: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
  })),
};

export default NavAdmin;
