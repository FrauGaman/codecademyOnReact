import React from 'react';
import Menu from '../config/menu'

function Something(props) {
  return (
    <ul>
      {Menu.items.map((item, index) =>
        <li key={index}><a href={item.URL}>{item.linkName}</a></li>
      )}
    </ul>
  )
}

export default Something