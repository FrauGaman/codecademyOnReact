import React from 'react';
import './filter.sass';

import { NavLink } from "react-router-dom";

function Filter(props) {
  const {theme} = props;
  const {language} = props;

  return(
      <div className="filter">
        <div className="filter_content">
          <div className="theme_col">
            <div className="filter_title">by subject</div>
            <ul className="theme_link">
              {theme.map(item =>
                <li key={item.id}><NavLink to={`/theme${item.link}`}>{item.themeName}</NavLink></li>
              )}
            </ul>
          </div>

          <div className="language_col">
            <div className="filter_title">by language</div>
            <ul className="language_link">
              {language.map(item =>
                <li key={item.id}><NavLink to={`/language${item.link}`}>{item.languageName}</NavLink></li>
              )}
            </ul>
          </div>
        </div>
      </div>

  )
}

export default Filter