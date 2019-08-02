import React from 'react';
import PropTypes from 'prop-types';

function SiteNav({ footerNav }) {
  return (
    <div className="footer__list footer__list__down">
      <ul>
        {footerNav.map(({ title = 'TitlePlug' }) =>
          <li key={title}><a href={null} className="footer__li">{title}</a></li>
        )}
      </ul>
      <div className="images">
        <a href={null}>
          <div className="twitter__icon"></div>
        </a>
        <a href={null}>
          <div className="facebook__icon"></div>
        </a>
        <a href={null}>
          <div className="insta__icon"></div>
        </a>
        <a href={null}>
          <div className="youtube__icon"></div>
        </a>
      </div>
    </div>
  );
}

SiteNav.propTypes = {
  footerNav: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export default SiteNav;
