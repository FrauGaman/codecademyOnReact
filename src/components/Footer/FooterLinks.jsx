import React from 'react';

function SiteNav(props) {
  const {footerNav} = props;
  return (
    <ul className="footer__list footer__list__down">
      {footerNav.map(item =>
        <li key={item.title}><a href="#" className="footer__li">{item.title}</a></li>
      )}
    </ul>
  )
}

export default SiteNav