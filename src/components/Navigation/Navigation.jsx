import React from 'react';
import Menu from '../../config/menu'
import './navigation.sass'

function Something(props) {
  return (
    <ul>
      {Menu.items.map(item =>
        <li className="menuLink" key={item.linkName}><a href={item.URL}>{item.linkName}</a></li>
      )}
    </ul>
  )
}

export default Something