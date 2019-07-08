import React from 'react';
import './filter.sass';

import { NavLink } from "react-router-dom";

function Filter(props) {
  const {theme, language} = props;

  return(
      <div className="filter">
        <div className="filter__content">
          <div className="theme__col">
            <div className="filter__title">by subject</div>
            <ul className="theme__link">
              {theme.map(item =>
                <li key={item.id}><NavLink to={`/theme${item.link}`}>{item.name}</NavLink></li>
              )}
            </ul>
          </div>

          <div className="language__col">
            <div className="filter__title">by language</div>
            <ul className="language__link">
              {language.map(item =>
                <li key={item.id}><NavLink to={`/language${item.link}`}>{item.name}</NavLink></li>
              )}
            </ul>
          </div>
        </div>
      </div>

  )
}

export default Filter