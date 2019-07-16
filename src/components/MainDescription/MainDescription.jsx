import React from 'react';
import PropTypes from 'prop-types';
import './mainDescription.sass';

function MainDescr({ filterArr, activeLink }) {
  return (
    <div className="main__descr__container">
      {filterArr.length ?
        filterArr.filter(({ link = 'linkPlug' }) =>
          activeLink === link,
        ).map(({ id, name = 'LinkPlug', descr = 'descrPlug' }) =>
          <div key={id}>
            <h1 className="main__header">{name}</h1>
            <div className="main__descr">{descr}</div>
          </div>
        )
        : []
      }
    </div>
  );
}

MainDescr.propTypes = {
  filterArr: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    descr: PropTypes.string,
  })),
  activeLink: PropTypes.string,
};

export default MainDescr;
