import React from 'react';
import './mainDescription.sass';
import Descr from '../../config/theme'

function MainDescr() {
  return(
    <div className="main__descr__container">
      {Descr.theme.filter(item =>

      )

      map( item =>
        <div key={item.id}>
          <h1 className="main__header">{ item.themeName }</h1>
          <div className="main__descr">{ item.descr }</div>
        </div>
      )}

    </div>

  )
}

export default MainDescr
