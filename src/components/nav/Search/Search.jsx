import React from 'react';
import PropTypes from 'prop-types';
import './search.sass';
import popularSearches from '../../../config/searchList';
import { ReactComponent as SearchIcon } from '../../../img/icons/SearchIcon.svg';

function Search({ hideSearch }) {
  return (
    <React.Fragment>
      <div className="search">
        <div className="search__container">
          <div className="search__input__box">
            <SearchIcon className="searchIcon__big"/>
            <input type="text" placeholder="e.g. Python, Data Science, JavaScript"/>
          </div>
          <div className="popular__searches">
            <h5 className="popular__title">Popular Searches</h5>
            <ul className="search__list">
              {popularSearches.popularSearches.map(({title = 'TitlePlug'}) =>
                <li key={title}>
                  <button>{title}</button>
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

Search.propTypes = {
  hideSearch: PropTypes.func,
};

export default Search;
