import React from 'react';
import './mainDescription.sass';

function MainDescr(props) {
  return(
    <div className="main__descr__container">
      {props.filterArr.filter(item =>
        props.activeLink === item.link
      ).map(item =>
        <div key={item.name}>
          <h1 className="main__header">{ item.name }</h1>
          <div className="main__descr">{ item.descr }</div>
        </div>
      )}
    </div>

  )
}

export default MainDescr
