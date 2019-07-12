import React from 'react';
import PropTypes from 'prop-types';

function Resources({ res }) {
  return (
    <ul className="footer__list footer__list__down">
      {res.map(({ title = 'LinkPlug' }) =>
        <li key={title}><a href="{null}" className="footer__li">{title}</a></li>)}
    </ul>
  );
}

Resources.propTypes = {
  res: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export default Resources;
