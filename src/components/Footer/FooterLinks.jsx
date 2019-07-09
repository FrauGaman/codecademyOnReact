import React from 'react';


function SiteNav(props) {
  const {footerNav} = props;
  return (
    <div className="footer__list footer__list__down">
      <ul>
        {footerNav.map(item =>
          <li key={item.title}><a href="#" className="footer__li">{item.title}</a></li>
        )}
      </ul>
      <div className="images">
        <a href="#">
          <div className="twitter__icon"></div>
        </a>
        <a href="#">
          <div className="facebook__icon"></div>
        </a>
        <a href="#">
          <div className="insta__icon"></div>
        </a>
        <a href="#">
          <div className="youtube__icon"></div>
        </a>
      </div>

    </div>
  )
}

export default SiteNav