import React from 'react';
import './navigation.sass';

function Something(props) {
  return (
    <ul>
      {props.Menu.items.map((props) =>
        <li className="menu__link" key={props.linkName}><a href={props.URL}>{props.linkName}</a></li>
      )}
    </ul>
  )
}

export default Something