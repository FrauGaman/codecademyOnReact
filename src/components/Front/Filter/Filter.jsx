import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './filter.sass';

function Filter({ theme, language }) {
  return (
    <div className="filter">
      <div className="filter__content">
        <div className="theme__col">
          <div className="filter__title">by subject</div>
          <ul className="theme__link">
            {theme.length ?
              theme.map(({ id, name = 'LinkPlug', link = '/linkPlug' }) =>
              <li key={id}><NavLink to={`/theme${link}`}>{name}</NavLink></li>
            )
              : <div className="plug__block__mini"> <hr/> Now this field is in work <hr/> </div>}
          </ul>
        </div>
        <div className="language__col">
          <div className="filter__title">by language</div>
          <ul className="language__link">
            {language.length ?
              language.map(({ id, name = 'LinkPlug', link = '/linkPlug' }) =>
              <li key={id}><NavLink to={`/language${link}`}>{name}</NavLink></li>
            )
              : <div className="plug__block__mini"> <hr/> Now this field is in work <hr/> </div>}
          </ul>
        </div>
      </div>
    </div>
  );
}

Filter.propTypes = {
  theme: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    descr: PropTypes.string,
    link: PropTypes.string,
  })),
  language: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    descr: PropTypes.string,
    link: PropTypes.string,
  })),
};

export default Filter;
