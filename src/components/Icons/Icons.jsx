import React from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';
import './iconsStyle.sass';

function Icons({ iconName, className }) {
  switch (iconName) {
    case 'clockIcon':
      return (
        <SVG src="../img/icons/clock.svg" className={className} />
      );
    case 'logo':
      return (
        <SVG src="../img/icons/navLogo.svg" className={className} />
      );
    case 'searchIcon':
      return (
        <SVG src="../img/icons/SearchIcon.svg" className={className} />
      );
    case 'proIcon':
      return(
        <SVG src="../img/icons/ProIcon.svg" className={className} />
      );
    case 'doneIcon':
      return (
        <SVG src="../img/icons/done.svg" className={className} />
      );
    case 'openMenuIcon':
      return (
        <SVG src="../img/icons/OpenMenuIcon.svg" className={className} />
      );
    case 'closeMenuIcon':
      return (
        <SVG src="../img/icons/CloseMenuIcon.svg" className={className} />
      );
    default:
      return (
        <SVG src="../img/icons/plugIcon.svg" className={className} />
      )

  }
}

Icons.propTypes = {
  iconName: PropTypes.string,
  className: PropTypes.string,
};

export default Icons;
