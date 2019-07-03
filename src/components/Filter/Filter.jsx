import React from 'react';
import './filter.sass'

function Filter(props) {
  const {theme} = props;
  const {language} = props;

  return(
    <div className="filter">
      <div className="themeCol">
        <div className="filterTitle">by subject</div>
        <ul className="themeLink">
          {theme.map(item =>
            <li key={item.id}><a href="#">{item.themeName}</a></li>
          )}
        </ul>
      </div>

      <div className="langCol">
        <div className="filterTitle">by language</div>
        <ul className="languageLink">
          {language.map(item =>
            <li key={item.id}><a href="#">{item.languageName}</a></li>
          )}
        </ul>
      </div>



    </div>
  )
}

export default Filter