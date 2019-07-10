import React, { useEffect } from 'react';
import './search.sass';
import popularSearches from '../../../config/searchList';
import Icons from '../../Icons';

function Search({ hideSearch }) {
  useEffect(() => {
    if (typeof (hideSearch) === 'function') {
      hideSearch = hideSearch;
    } else {
      hideSearch = console.log('You have some problems');
    }
  });
  return (
    <React.Fragment>
      <div className="search">
        <div className="search__container">
          <div className="search__input__box">
            <Icons iconId={'searchIcon'} height={47} width={47} color={'#828285'}/>
            <input type="text" placeholder="e.g. Python, Data Science, JavaScript"/>
          </div>
          <div className="popular__searches">
            <h5 className="popular__title">Popular Searches</h5>
            <ul className="search__list">
              {popularSearches.popularSearches.map(item =>
                <li key={item.title}>
                  <button>{item.title}</button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className="black__content" onClick={hideSearch}></div>
    </React.Fragment>
  );
}

export default Search;
