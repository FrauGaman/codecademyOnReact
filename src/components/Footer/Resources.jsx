import React from 'react';

function Resources(props) {
  const {res} = props;
  return (
    <ul className="footer__list footer__list__down">
      {res.map(item =>
        <li key={item.title}><a href="#" className="footer__li">{item.title}</a></li>
      )}
    </ul>
  )
}

export default Resources