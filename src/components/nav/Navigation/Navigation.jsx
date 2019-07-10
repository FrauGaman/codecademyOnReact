import React from 'react';
import './navigation.sass';
// import PropTypes from 'prop-types';

function NavMenu(props) {
  return (
    <ul>
      {props.menu.items.map(item =>
        <li className="menu__link" key={item.URL}><a href={item.URL}>{item.linkName}</a></li>
      )}
    </ul>
  );
}

export default NavMenu;

// NavMenu.defaultProps = {
//   linkName: 'lololo',
//   URL: 'cococo',
// };
//
// NavMenu.propTypes = {
//   linkName: PropTypes.string,
//   URL: PropTypes.string,
// };