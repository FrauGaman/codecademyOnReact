import React from 'react';
import Theme from '../../config/theme'
import Language from '../../config/language'
import './filter.sass'

function Filter() {
  return(
    <div className="filter">
      <div className="themeCol">
        <div className="filterTitle">by subject</div>
        <ul className="themeLink">
          {Theme.theme.map(item =>
            <li key={item.id}><a href="#">{item.themeName}</a></li>
          )}
        </ul>
      </div>

      <div className="langCol">
        <div className="filterTitle">by language</div>
        <ul className="languageLink">
          {Language.language.map(item =>
            <li key={item.id}><a href="#">{item.languageName}</a></li>
          )}
        </ul>
      </div>



    </div>
  )
}

export default Filter