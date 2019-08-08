import React from 'react';
import PropTypes from 'prop-types';
import './navigation.sass';

function NavMenu({ menu }) {
  return (
    <ul>
      {!!menu.length && menu.map(({id, URL = '/all', linkName = 'linkPlug'}) =>
        <li className="menu__link" key={id}><a href={URL}>{linkName}</a></li>
      )}
    </ul>
  );
}

NavMenu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    URL: PropTypes.string,
    linkName: PropTypes.string,
  })),
};

export default NavMenu;
