import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '../../Icons/Icons';
import './search.sass';
import getData from '../../../scripts/getData';
import { PATH } from '../../../scripts/const';

function Search({ hideSearch }) {
  const [searchState, setSearch] = useState([]);
  const addDataSearch = (res) => {
    setSearch(res);
  };
  useEffect(() => {
    getData(PATH.POPULARSEARCHES, addDataSearch);
  }, []);

  return (
    <React.Fragment>
      <div className="search">
        <div className="search__container">
          <div className="search__input__box">
            <SearchIcon iconName="searchIcon" className={'search__icon_big'} />
            <input type="text" placeholder="e.g. Python, Data Science, JavaScript" />
          </div>
          <div className="popular__searches">
            <h5 className="popular__title">Popular Searches</h5>
            <ul className="search__list">
              {
                searchState.length ?
                  searchState.map(({title = 'TitlePlug'}) =>
                <li key={title}>
                  <button>{title}</button>
                </li>
              )
                : <div className="plug__block__mini"> <hr/> Now this field is in work <hr/> </div>
              }
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
